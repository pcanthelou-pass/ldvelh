import { UserStore, createUserStore } from '@stores'
import { UserState } from '@types'
import { useStore } from 'zustand'

let USER_STORE: UserStore

export function useUserStore<U>(selector: (state: UserState) => U) {
  if (!USER_STORE) {
    USER_STORE = createUserStore()
  }

  return useStore(USER_STORE, selector)
}
