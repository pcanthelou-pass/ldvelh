import { useRouter } from 'expo-router'

export const useGoToAfterFlee = () => {
  const router = useRouter()

  return () => router.replace('/read-scene')
}
