import { WrapperTestExt } from '@helpers/WrapperTestExt'
import { renderHook } from '@testing-library/react-native'
import { useFleeScene } from '../useFleeScene'

describe('useFleeScene', () => {
  it('should', () => {
    const { result } = renderHook(() => useFleeScene(), {
      wrapper: WrapperTestExt,
    })
    expect(result.current).toHaveProperty('name', 'Héro')
    expect(result.current).toHaveProperty('endurance', 18)
  })
})
