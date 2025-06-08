import { useRouter } from 'expo-router'

/**
 *
 * @returns A function that navigates back to the previous screen in the router history.
 */
export const useGoBack = () => {
  const router = useRouter()
  return () => {
    router.back()
  }
}
