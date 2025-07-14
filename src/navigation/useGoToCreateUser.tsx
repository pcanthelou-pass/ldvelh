import { useRouter } from 'expo-router'

export const useGoToCreateUser = () => {
  const router = useRouter()
  return () => {
    router.push('/create-user')
  }
}
