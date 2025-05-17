import { UserSlice } from '../slices/user'
import { useZeStore } from './generic-store'

export function useUserStore(
  selector: (state: UserSlice) => UserSlice,
): UserSlice {
  return useZeStore<UserSlice>(selector)
}
