import { useRouter } from 'expo-router'

export const useGoToReadIntroduction = () => {
  const router = useRouter()

  return () => {
    router.push('/read-introduction')
  }
}
