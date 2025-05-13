import { UserSlice } from '../slices/user';
import { useZeStore } from './generic';

export function useUserStore(
  selector: (state: UserSlice) => UserSlice
): UserSlice {
  return useZeStore<UserSlice>(selector);
}
