import { useRouter } from 'expo-router'

export const useGoToFightScene = () => {
  const router = useRouter()
  return () => {
    router.push('/read-scene/fight-scene')
  }
}
