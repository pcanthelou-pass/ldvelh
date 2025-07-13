import { act, renderHook } from '@testing-library/react-native'
import { useFight } from '../useFight'

// Mocks
const mockOpponent = { abilities: { endurance: 10 }, attack: jest.fn() }
const mockCharacter = { abilities: { endurance: 20 }, attack: jest.fn() }
const mockHitCharacter = jest.fn()
const mockHitOpponent = jest.fn()

const mockFightInstance = {
  opponentEndurance: 8,
  heroEndurance: 18,
  heroWound: 2,
  opponentWound: 2,
  canContinue: true,
  heroIsDead: false,
  doResolveRound: jest.fn(),
  doWoundHero: function (n) {
    this.heroWound += n
  },
}

jest.mock('@actions', () => ({ BuildAttacker: jest.fn((obj) => obj) }))
jest.mock('@types', () => ({
  Fight: function () {
    return mockFightInstance
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
    mockFightInstance.canContinue = true
    mockFightInstance.heroIsDead = false
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
    mockFightInstance.canContinue = false
    mockFightInstance.heroIsDead = false
    const { result } = renderHook(() => useFight())
    act(() => {
      result.current.onNewRound()
    })
    expect(mockHitCharacter).toHaveBeenCalledWith(2)
    expect(mockHitOpponent).toHaveBeenCalledWith(2)
  })

  it('should call dieFight if hero is dead', () => {
    mockFightInstance.canContinue = false
    mockFightInstance.heroIsDead = true
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
})
