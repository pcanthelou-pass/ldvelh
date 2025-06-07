import { DEFAULT_PROPS, UserProps, UserState } from '@core'
import { createStore } from 'zustand'

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
