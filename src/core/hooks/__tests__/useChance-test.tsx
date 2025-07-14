import { TEST_HERO } from '@helpers/TEST_HERO'
import { WrapperTestExt } from '@helpers/WrapperTestExt'
import { act, renderHook } from '@testing-library/react-native'
import { CharacterRawProps, GameState } from '@types'
import { StoreApi } from 'zustand'
import { useChance } from '../useChance'

const WrapperTestExtHeroChance =
  (chance: number) =>
  // eslint-disable-next-line react/display-name
  ({ children }: { children: React.ReactNode }) => {
    const runOnStart = (store: StoreApi<GameState>) => {
      store.getState().setCharacter({
        ...TEST_HERO,
        abilities: { agility: 0, endurance: 0, chance: chance },
      } as CharacterRawProps)
    }
    return <WrapperTestExt runOnStart={runOnStart}>{children}</WrapperTestExt>
  }

describe('useChance', () => {
  it('could use chance when enough chance', () => {
    const { result } = renderHook(() => useChance(), {
      wrapper: WrapperTestExtHeroChance(12),
    })
    expect(result.current.chance).toBe(12)
    expect(result.current.canTryChance()).toBeTruthy()
  })
  it('when use chance it decrease chance by one', async () => {
    const { result } = renderHook(() => useChance(), {
      wrapper: WrapperTestExtHeroChance(12),
    })
    expect(result.current.chance).toBe(12)
    act(() => {
      result.current.tryChance({ onSuccess: () => {}, onFailure: () => {} })
    })
    expect(result.current.chance).toBe(11)
  })
  it('should call success when has chance', () => {
    const success = jest.fn()
    const failure = jest.fn()
    const { result } = renderHook(() => useChance(), {
      wrapper: WrapperTestExtHeroChance(12),
    })
    act(() => {
      result.current.tryChance({ onSuccess: success, onFailure: failure })
    })
    expect(success).toHaveBeenCalledTimes(1)
    expect(failure).toHaveBeenCalledTimes(0)
  })
  it('should call failure when has no chance', () => {
    const success = jest.fn()
    const failure = jest.fn()
    const { result } = renderHook(() => useChance(), {
      wrapper: WrapperTestExtHeroChance(1),
    })
    act(() => {
      result.current.tryChance({ onSuccess: success, onFailure: failure })
    })
    expect(success).toHaveBeenCalledTimes(0)
    expect(failure).toHaveBeenCalledTimes(1)
  })
  it('could not use chance when no more left', () => {
    const success = jest.fn()
    const failure = jest.fn()
    const { result } = renderHook(() => useChance(), {
      wrapper: WrapperTestExtHeroChance(0),
    })
    expect(result.current.chance).toBe(0)
    expect(result.current.canTryChance()).toBeFalsy()
    act(() => {
      result.current.tryChance({ onSuccess: success, onFailure: failure })
    })
    expect(success).toHaveBeenCalledTimes(0)
    expect(failure).toHaveBeenCalledTimes(0)
  })
})
