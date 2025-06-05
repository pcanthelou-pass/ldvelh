import { renderHook } from '@testing-library/react-native'
import { useUserStore } from '../useUserStore'

describe('useUserStore', () => {
  it('should render the hook', () => {
    const { result } = renderHook(() => useUserStore((state) => state))

    expect(result.current).toHaveProperty('pseudo')
    expect(result.current).toHaveProperty('setPseudo')
  })
})
