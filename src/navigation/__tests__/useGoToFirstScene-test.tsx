import { WrapperTestExt } from '@helpers/WrapperTestExt'
import { renderHook } from '@testing-library/react-native'
import { mockReplace } from 'src/shared/helpers/__mocks__/mockReplace'
import { useGoToFirstScene } from '../useGoToFirstScene'

/**
 * WrapperTestExt is a custom wrapper that provides necessary context for the hooks being tested.
 * It is used to render the hook in a test environment that mimics the app's structure.
 */
describe('useGoToFirstScene', () => {
  beforeEach(() => {
    mockReplace.mockClear()
  })

  it('should go to read scene', async () => {
    const { result } = renderHook(() => useGoToFirstScene(), {
      wrapper: WrapperTestExt,
    })
    expect(typeof result.current).toBe('function')
    result.current()
    expect(mockReplace).toHaveBeenCalledWith('/read-scene')
  })
})
