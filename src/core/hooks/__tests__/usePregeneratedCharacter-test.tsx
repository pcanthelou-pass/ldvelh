import { WrapperTestExt } from '@helpers/WrapperTestExt'
import { renderHook } from '@testing-library/react-native'
import { usePregeneratedCharacter } from '../usePregeneratedCharacter'

describe('usePregeneratedCharacter', () => {
  it('should set the character from pregenerated data', () => {
    const { result } = renderHook(() => usePregeneratedCharacter(), {
      wrapper: WrapperTestExt,
    })

    const character = result.current

    expect(character).toHaveProperty('name', 'Héro')
  })
  it('should return character abilities', () => {
    const { result } = renderHook(() => usePregeneratedCharacter(), {
      wrapper: WrapperTestExt,
    })

    const character = result.current

    expect(character).toHaveProperty('agility')
    expect(character).toHaveProperty('endurance')
    expect(character).toHaveProperty('chance')
  })
  it('should return character items', () => {
    const { result } = renderHook(() => usePregeneratedCharacter(), {
      wrapper: WrapperTestExt,
    })

    const character = result.current

    expect(character.items).toBeDefined()
    expect(character.items).toHaveLength(2)
    expect(character.items[0]).toHaveProperty('power', 'potion')
  })
})
