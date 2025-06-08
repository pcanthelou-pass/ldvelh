import { WrapperTestExt } from '@shared'
import { renderHook } from '@testing-library/react-native'
import { mockGoBack, mockReplace } from 'src/shared/helpers/mocks/mockReplace'
import { useGoBack } from '../useGoBack'

describe('useGoBack', () => {
  beforeEach(() => {
    mockReplace.mockClear()
  })

  it('should go back to previous scene', async () => {
    const { result } = renderHook(() => useGoBack(), {
      wrapper: WrapperTestExt,
    })
    expect(typeof result.current).toBe('function')
    result.current()
    expect(mockGoBack).toHaveBeenCalledTimes(1)
  })
})
