import { createStore } from 'zustand'
import { DEFAULT_PROPS, UserProps, UserState } from '../types/user'

export type UserStore = ReturnType<typeof createUserStore>

export const createUserStore = (initProps?: Partial<UserProps>) => {
  return createStore<UserState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setPseudo: (pseudo: string) => {
      set((state) => ({
        pseudo,
      }))
    },
  }))
}
