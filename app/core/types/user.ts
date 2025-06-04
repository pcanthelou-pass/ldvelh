export interface UserProps {
  pseudo: string
}
export const DEFAULT_PROPS: UserProps = {
  pseudo: '',
}

export interface UserActions {
  setPseudo: (pseudo: string) => void
}

export type UserState = UserProps & UserActions
