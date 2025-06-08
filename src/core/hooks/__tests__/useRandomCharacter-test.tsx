import { WrapperTestExt } from '@shared'
import { renderHook } from '@testing-library/react-native'
import { useRandomCharacter } from '../useRandomCharacter'

describe('useRandomCharacter', () => {
  it('should set a random character with abilities', () => {
    const { result } = renderHook(() => useRandomCharacter(), {
      wrapper: WrapperTestExt,
    })
    const character = result.current
    expect(character).toHaveProperty('name')
    expect(character).toHaveProperty('agility')
    expect(character).toHaveProperty('endurance')
    expect(character).toHaveProperty('chance')
  })
  it('should set random abilities within expected ranges', () => {
    const { result } = renderHook(() => useRandomCharacter(), {
      wrapper: WrapperTestExt,
    })
    const character = result.current
    expect(character.agility).toBeGreaterThanOrEqual(6)
    expect(character.agility).toBeLessThanOrEqual(12) // 6 + D6() can go up to 12
    expect(character.endurance).toBeGreaterThanOrEqual(12)
    expect(character.endurance).toBeLessThanOrEqual(24) // 12 + D6(2) can go up to 24
    expect(character.chance).toBeGreaterThanOrEqual(6)
    expect(character.chance).toBeLessThanOrEqual(12) // 6 + D6() can go up to 12
  })
  it('should set a pregenerated character as base', () => {
    const { result } = renderHook(() => useRandomCharacter(), {
      wrapper: WrapperTestExt,
    })
    const character = result.current
    expect(character.name).toBeDefined()
    expect(character.items).toBeDefined()
  })
})
