import { GameSlice, StoreContext, UserSlice } from '@core';
import { useContext } from 'react';
import { useStore } from 'zustand';

export function useGameStore<T>(
  selector: (state: GameSlice) => GameSlice
): GameSlice {
  return useZeStore<GameSlice>(selector);
}

export function useUserStore(
  selector: (state: UserSlice) => UserSlice
): UserSlice {
  return useZeStore<UserSlice>(selector);
}

export function useZeStore<T>(selector: any): T {
  const store = useContext(StoreContext);
  if (!store) throw new Error('Missing StoreContext.Provider in the tree');
  return useStore(store, selector);
}
