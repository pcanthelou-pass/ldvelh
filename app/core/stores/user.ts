import { createStore } from 'zustand'

export interface UserProps {
  pseudo: string
}

export interface UserActions {
  setPseudo: (pseudo: string) => void
}

export type UserState = UserProps & UserActions

export type UserStore = ReturnType<typeof createUserStore>

export const createUserStore = (initProps?: Partial<UserProps>) => {
  const DEFAULT_PROPS: UserProps = {
    pseudo: '',
  }
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
