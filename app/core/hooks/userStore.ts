import { UserSlice, useZeStore } from '@core'

export function useUserStore(
  selector?: (state: UserSlice) => UserSlice,
): UserSlice {
  return useZeStore<UserSlice>(selector)
}
