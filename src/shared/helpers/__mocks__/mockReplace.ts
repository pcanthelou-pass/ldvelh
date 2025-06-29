/**
 * Mocking the useRouter hook from expo-router to test navigation functionality.
 * This allows us to simulate the navigation behavior without needing a full app context.
 */
export const mockReplace = jest.fn()
export const mockPush = jest.fn()
export const mockGoBack = jest.fn()

jest.mock('expo-router', () => ({
  useRouter: () => ({
    replace: mockReplace,
    push: mockPush,
    back: mockGoBack,
  }),
}))
