import { WrapperTestExt } from '@helpers/WrapperTestExt'
import { renderHook } from '@testing-library/react-native'
import { mockPush } from 'src/shared/helpers/__mocks__/mockReplace'
import { useGoToReadIntroduction } from '../useGoToReadIntroduction'

describe('useGoToReadIntroduction', () => {
  beforeEach(() => {
    mockPush.mockClear()
  })

  it('should go to read introduction scene', async () => {
    const { result } = renderHook(() => useGoToReadIntroduction(), {
      wrapper: WrapperTestExt,
    })
    expect(typeof result.current).toBe('function')
    result.current()
    expect(mockPush).toHaveBeenCalledWith('/read-introduction')
  })
})
