import { WrapperTestExt } from '@shared'
import { renderHook } from '@testing-library/react-native'
import { useGoToChooseStory } from '../useGotToChooseStory'

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

describe('useGoToChooseStory', () => {
  beforeEach(() => {
    mockReplace.mockClear()
  })

  it('should go to choose story scene', async () => {
    const { result } = renderHook(() => useGoToChooseStory(), {
      wrapper: WrapperTestExt,
    })
    expect(typeof result.current).toBe('function')
    result.current()
    expect(mockReplace).toHaveBeenCalledWith('/choose-story')
  })
})
