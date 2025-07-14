import { renderHook } from '@testing-library/react-native'
import { WrapperTest } from '@helpers/WrapperTest'
import { useUserStore } from '../useUserStore'

describe('useUserStore', () => {
  it('should render the hook', () => {
    const { result } = renderHook(() => useUserStore((state) => state), {
      wrapper: WrapperTest,
    })

    expect(result.current).toHaveProperty('pseudo')
    expect(result.current).toHaveProperty('setPseudo')
  })
})
