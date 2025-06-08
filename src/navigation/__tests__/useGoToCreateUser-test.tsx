import { WrapperTestExt } from '@shared'
import { renderHook } from '@testing-library/react-native'
import { mockPush } from 'src/shared/helpers/mocks/mockReplace'
import { useGoToCreateUser } from '../useGoToCreateUser'

describe('useGoToCreateUSer', () => {
  beforeEach(() => {
    mockPush.mockClear()
  })

  it('should go to create user scene', async () => {
    const { result } = renderHook(() => useGoToCreateUser(), {
      wrapper: WrapperTestExt,
    })
    expect(typeof result.current).toBe('function')
    result.current()
    expect(mockPush).toHaveBeenCalledWith('/create-user')
  })
})
