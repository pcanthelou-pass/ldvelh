import { Item, useGameStore } from '@core/hooks'
import { TEST_HERO, WrapperTest, WrapperTestExt } from '@shared/helpers'
import { act, renderHook } from '@testing-library/react-native'
import { getActionableItems } from '../hooks'

const TEST_ITEMS = TEST_HERO.items

describe('usActionableItems', () => {
  it('Returns an empty array if no items passed', () => {
    const { result } = renderHook(() => getActionableItems([]), {
      wrapper: WrapperTest,
    })
    expect(result.current.length).toBe(0)
  })
  it('Returns an array of records <names, function>', () => {
    const { result } = renderHook(() => getActionableItems(TEST_ITEMS), {
      wrapper: WrapperTest,
    })
    expect(result.current.length).not.toBe(0)
  })
  it('The item is well named', () => {
    const { result } = renderHook(() => getActionableItems(TEST_ITEMS), {
      wrapper: WrapperTest,
    })
    expect(result.current[0]?.name).toBe("Boire la potion d'endurance")
  })
  it('The item apply is effect on a character', () => {
    const items: Item[] = getActionableItems(TEST_ITEMS)
    const { result } = renderHook(() => useGameStore(), {
      wrapper: WrapperTestExt,
    })
    act(() => {
      result.current.hitCharacter(2)
    })
    expect(result.current.character.abilities.endurance).toBe(16)
    expect(items?.[0].action).toBeInstanceOf(Function)
    expect(result.current.character.items["Potion d'endurance"]?.quantity).toBe(
      1,
    )
    act(() => items?.[0].action(result.current))
    expect(result.current.character.items["Potion d'endurance"]?.quantity).toBe(
      0,
    )
    expect(result.current.character.abilities.endurance).toBe(18)
  })
})
