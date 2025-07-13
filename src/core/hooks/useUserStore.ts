import { useStores } from '@contexts'
import { UserState } from '@types'
import { useStore } from 'zustand'

export function useUserStore<U>(selector: (state: UserState) => U) {
  const { user } = useStores()
  return useStore(user, selector)
}

export const useUserStoreApi = () => {
  const { user } = useStores()
  return user
}
