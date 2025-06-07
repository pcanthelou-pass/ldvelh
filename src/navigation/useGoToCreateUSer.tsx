import { useRouter } from 'expo-router'

export const useGoToCreateUSer = () => {
  const router = useRouter()
  return () => {
    router.push('/create-user')
  }
}
