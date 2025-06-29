import { WrapperTestExt } from '@helpers/WrapperTestExt'
import { renderHook } from '@testing-library/react-native'
import { useCharacterStats } from '../useCharacterStats'

describe('useCharacterStats', () => {
  it('should return character stats', () => {
    const { result } = renderHook(() => useCharacterStats(), {
      wrapper: WrapperTestExt,
    })

    expect(result.current).toEqual({
      name: 'Héro',
      agility: 8,
      endurance: 18,
      chance: 8,
    })
  })
})
