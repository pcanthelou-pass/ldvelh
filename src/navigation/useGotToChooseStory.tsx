import { useRouter } from 'expo-router'

/**
 *
 * @returns A function that navigates to the choose story screen.
 * This is used to reset the navigation stack and go to the choose story screen.
 */
export const useGoToChooseStory = () => {
  const router = useRouter()
  return () => {
    router.replace('/choose-story')
  }
}
