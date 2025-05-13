import { create } from 'zustand';
import { Slices } from './slices';

export type AllSlices =
  ReturnType<Slices[keyof Slices]> extends infer R
    ? R extends object
      ? R
      : never
    : never;

export type StoreFromSlices = ReturnType<typeof createStoreFromSlices>;

export const createStoreFromSlices = (slices?: Slices) => {
  if (slices) {
    return create<AllSlices>((...args) => {
      return Object.values(slices).reduce(
        (acc, sliceCreator) => ({
          ...acc,
          ...sliceCreator(...args)
        }),
        {} as AllSlices
      );
    });
  }
  return null;
};
