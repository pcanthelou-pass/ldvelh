import { act, renderHook } from '@testing-library/react-native'
import { useFight } from '../useFight'

// Mocks
const mockOpponent = { abilities: { endurance: 10 }, attack: jest.fn() }
const mockCharacter = { abilities: { endurance: 20 }, attack: jest.fn() }
const mockHitCharacter = jest.fn()
const mockHitOpponent = jest.fn()

const mockOnAfterContinue = jest.fn()
const mockOnAfterDie = jest.fn()
const mockOnAfterFlee = jest.fn()
const mockOnAfterSurvive = jest.fn()

const mockFightInstance = {
  opponentEndurance: 8,
  heroEndurance: 18,
  heroWound: 2,
  opponentWound: 2,
  canContinue: true,
  heroIsDead: false,
  doResolveRound: jest.fn(),
  round: 0,
  doWoundHero: jest.fn(),
  doSuccessChance: jest.fn(),
  doFailChance: jest.fn(),
  opponent: mockOpponent,
  hero: mockCharacter,
  heroHasBeenTouched: false,
  opponentHasBeenTouched: false,
  opponentIsDead: false,
}
const mockOnSuccess = jest.fn()
const mockOnFailure = jest.fn()

jest.mock('@actions', () => ({
  ...jest.requireActual('@actions'),
  BuildAttacker: jest.fn((obj) => obj),
}))

jest.mock('@hooks', () => ({
  ...jest.requireActual('@hooks'),
  useGameStore: jest.fn((selector) =>
    selector({
      currentScene: { opponent: mockOpponent },
      character: mockCharacter,
      hitCharacter: mockHitCharacter,
      hitOpponent: mockHitOpponent,
    }),
  ),
  Fight() {
    return mockFightInstance
  },
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
    const { result } = renderHook(() =>
      useFight(
        mockOnAfterContinue,
        mockOnAfterDie,
        mockOnAfterFlee,
        mockOnAfterSurvive,
      ),
    )
    act(() => {
      result.current.onNewRound()
    })
    expect(result.current.opponentEndurance).toBe(8)
    expect(result.current.heroEndurance).toBe(18)
    expect(mockHitCharacter).not.toHaveBeenCalled()
    expect(mockHitOpponent).not.toHaveBeenCalled()
    expect(mockOnAfterContinue).toHaveBeenCalledTimes(1)
  })

  it('should call surviveFight if cannot continue', () => {
    mockFightInstance.canContinue = false
    mockFightInstance.heroIsDead = false
    const { result } = renderHook(() =>
      useFight(
        mockOnAfterContinue,
        mockOnAfterDie,
        mockOnAfterFlee,
        mockOnAfterSurvive,
      ),
    )
    act(() => {
      result.current.onNewRound()
    })
    expect(mockHitCharacter).toHaveBeenCalledWith(2)
    expect(mockHitOpponent).toHaveBeenCalledWith(2)
    expect(mockOnAfterSurvive).toHaveBeenCalledTimes(1)
  })

  it('should call dieFight if hero is dead', () => {
    mockFightInstance.canContinue = false
    mockFightInstance.heroIsDead = true
    const { result } = renderHook(() =>
      useFight(
        mockOnAfterContinue,
        mockOnAfterDie,
        mockOnAfterFlee,
        mockOnAfterSurvive,
      ),
    )
    act(() => {
      result.current.onNewRound()
    })
    expect(mockHitCharacter).toHaveBeenCalledWith(2)
    expect(mockHitOpponent).toHaveBeenCalledWith(2)
    expect(mockOnAfterDie).toHaveBeenCalledTimes(1)
  })

  it('should call fleeFight correctly', () => {
    mockFightInstance.canContinue = true
    mockFightInstance.heroIsDead = false
    const { result } = renderHook(() =>
      useFight(
        mockOnAfterContinue,
        mockOnAfterDie,
        mockOnAfterFlee,
        mockOnAfterSurvive,
      ),
    )
    act(() => {
      result.current.fleeFight()
    })
    expect(mockHitCharacter).toHaveBeenCalledWith(2) // heroWound + 2
    expect(mockHitOpponent).toHaveBeenCalledWith(99)
    expect(mockOnAfterFlee).toHaveBeenCalledTimes(1)
  })

  it('should call dieFight if flee with less than 2 hp', () => {
    mockFightInstance.canContinue = true
    mockFightInstance.heroIsDead = false
    const { result } = renderHook(() =>
      useFight(
        mockOnAfterContinue,
        mockOnAfterDie,
        mockOnAfterFlee,
        mockOnAfterSurvive,
      ),
    )
    mockFightInstance.heroIsDead = true
    act(() => {
      result.current.fleeFight()
    })
    expect(mockHitCharacter).toHaveBeenCalledWith(2) // heroWound + 2
    expect(mockHitOpponent).toHaveBeenCalledWith(2)
    expect(mockOnAfterFlee).toHaveBeenCalledTimes(0)
    expect(mockOnAfterDie).toHaveBeenCalledTimes(1)
  })

  it('should handle chance failure', () => {
    const { result } = renderHook(() => useFight())
    act(() => {
      result.current.onChanceFailure()
    })
    expect(mockFightInstance.doFailChance).toHaveBeenCalledTimes(1)
    expect(mockFightInstance.doSuccessChance).toHaveBeenCalledTimes(0)
  })

  it('should handle chance success', () => {
    const { result } = renderHook(() => useFight())
    act(() => {
      result.current.onChanceSuccess()
    })
    expect(mockFightInstance.doFailChance).toHaveBeenCalledTimes(0)
    expect(mockFightInstance.doSuccessChance).toHaveBeenCalledTimes(1)
  })
})
