import { useRouter } from 'expo-router'

export const useGoToDieScene = () => {
  const router = useRouter()
  return () => {
    router.replace('/die-scene')
  }
}
