import { create } from 'zustand';
import { GameSlice, Slices } from './types';

export const createStoreFromSlices = (slices?: Slices) => {
  if (slices) {
    return create<GameSlice>()((...a) => ({
      ...slices['game'](...a)
    }));
  }
  return null;
};

export type StoreFromSlices = ReturnType<typeof createStoreFromSlices>;
