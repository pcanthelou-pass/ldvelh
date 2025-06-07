import { useRouter } from 'expo-router'

/**
 *
 * @returns A function that navigates to the first scene of the app.
 * This is used to reset the navigation stack and go to the first scene.
 */
export const useGoToFirstScene = () => {
  const router = useRouter()

  return () => router.replace('/read-scene')
}
