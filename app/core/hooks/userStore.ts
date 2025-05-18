import { UserSlice } from '../slices/user'
import { useZeStore } from './genericStore'

export function useUserStore(
  selector?: (state: UserSlice) => UserSlice,
): UserSlice {
  return useZeStore<UserSlice>(selector)
}
