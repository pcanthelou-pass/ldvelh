import { act, renderHook } from '@testing-library/react-native'
import { useFight } from '../useFight'

// Mocks
const mockOpponent = { abilities: { endurance: 10 }, attack: jest.fn() }
const mockCharacter = { abilities: { endurance: 20 }, attack: jest.fn() }
const mockHitCharacter = jest.fn()
const mockHitOpponent = jest.fn()

const mockServiceInstance = {
  opponentEndurance: 8,
  heroEndurance: 18,
  heroWound: 2,
  opponentWound: 2,
  canContinue: true,
  heroIsDead: false,
  heroHasBeenTouched: false,
  opponentHasBeenTouched: false,
  resolveRound: jest.fn(),
  applyChanceSuccess: jest.fn(),
  applyChanceFailure: jest.fn(),
  flee: function () {
    this.heroWound += 2
  },
}

jest.mock('@actions', () => ({ BuildAttacker: jest.fn((obj) => obj) }))
jest.mock('../../services/FightService', () => ({
  FightService: function () {
    return mockServiceInstance
  },
}))

jest.mock('../useGameStore', () => ({
  useGameStore: jest.fn((selector) =>
    selector({
      currentScene: { opponent: mockOpponent },
      character: mockCharacter,
      hitCharacter: mockHitCharacter,
      hitOpponent: mockHitOpponent,
    }),
  ),
}))

describe('useFight', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    // Reset fight instance state if needed
    mockServiceInstance.canContinue = true
    mockServiceInstance.heroIsDead = false
  })

  it('should initialize with correct endurances', () => {
    const { result } = renderHook(() => useFight())
    expect(result.current.opponentEndurance).toBe(10)
    expect(result.current.heroEndurance).toBe(20)
  })

  it('should update endurances after a round (continue)', () => {
    const { result } = renderHook(() => useFight())
    act(() => {
      result.current.onNewRound()
    })
    expect(result.current.opponentEndurance).toBe(8)
    expect(result.current.heroEndurance).toBe(18)
    expect(mockHitCharacter).not.toHaveBeenCalled()
    expect(mockHitOpponent).not.toHaveBeenCalled()
  })

  it('should call surviveFight if cannot continue', () => {
    mockServiceInstance.canContinue = false
    mockServiceInstance.heroIsDead = false
    const { result } = renderHook(() => useFight())
    act(() => {
      result.current.onNewRound()
    })
    expect(mockHitCharacter).toHaveBeenCalledWith(2)
    expect(mockHitOpponent).toHaveBeenCalledWith(2)
  })

  it('should call dieFight if hero is dead', () => {
    mockServiceInstance.canContinue = false
    mockServiceInstance.heroIsDead = true
    const { result } = renderHook(() => useFight())
    act(() => {
      result.current.onNewRound()
    })
    expect(mockHitCharacter).toHaveBeenCalledWith(2)
    expect(mockHitOpponent).toHaveBeenCalledWith(2)
  })

  it('should call fleeFight correctly', () => {
    const { result } = renderHook(() => useFight())
    act(() => {
      result.current.fleeFight()
    })
    expect(mockHitCharacter).toHaveBeenCalledWith(4) // heroWound + 2
    expect(mockHitOpponent).toHaveBeenCalledWith(99)
  })

  it('should handle chance success', () => {
    const { result } = renderHook(() => useFight())
    act(() => {
      result.current.onChanceSuccess()
    })
    expect(mockFightInstance.doSuccessChance).toHaveBeenCalled()
    expect(result.current.opponentEndurance).toBe(8)
    expect(result.current.heroEndurance).toBe(18)
  })

  it('should handle chance failure', () => {
    const { result } = renderHook(() => useFight())
    act(() => {
      result.current.onChanceFailure()
    })
    expect(mockFightInstance.doFailChance).toHaveBeenCalled()
    expect(result.current.opponentEndurance).toBe(8)
    expect(result.current.heroEndurance).toBe(18)
  })
})
