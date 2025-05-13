import { GameSlice, StoreContext } from '@core';
import { useContext } from 'react';
import { useStore } from 'zustand';

export function useGameStore<T>(selector: (state: GameSlice) => T): T {
  const store = useContext(StoreContext);
  if (!store) throw new Error('Missing StoreContext.Provider in the tree');
  return useStore(store, selector);
}
