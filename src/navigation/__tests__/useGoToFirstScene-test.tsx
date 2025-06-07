import { WrapperTestExt } from '@shared'
import { renderHook } from '@testing-library/react-native'
import { useGoToFirstScene } from '../useGoToFirstScene'

/**
 * Mocking the useRouter hook from expo-router to test navigation functionality.
 * This allows us to simulate the navigation behavior without needing a full app context.
 */
const mockReplace = jest.fn()
jest.mock('expo-router', () => ({
  useRouter: () => ({
    replace: mockReplace,
  }),
}))

/**
 * WrapperTestExt is a custom wrapper that provides necessary context for the hooks being tested.
 * It is used to render the hook in a test environment that mimics the app's structure.
 */
describe('useReadIntroduction', () => {
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
