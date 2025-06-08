import { useRouter } from 'expo-router'

export const useGoToFleeScene = () => {
  const router = useRouter()
  return () => {
    router.replace('/flee-scene')
  }
}
