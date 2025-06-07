import { WrapperTestExt } from '@shared'
import { renderHook } from '@testing-library/react-native'
import { mockPush } from '../mocks/mockReplace'
import { useGoToCreateUSer } from '../useGoToCreateUSer'

describe('useGoToCreateUSer', () => {
  beforeEach(() => {
    mockPush.mockClear()
  })

  it('should go to create user scene', async () => {
    const { result } = renderHook(() => useGoToCreateUSer(), {
      wrapper: WrapperTestExt,
    })
    expect(typeof result.current).toBe('function')
    result.current()
    expect(mockPush).toHaveBeenCalledWith('/create-user')
  })
})
