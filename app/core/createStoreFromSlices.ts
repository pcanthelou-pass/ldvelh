import { AllSlices, Slices } from '@core'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export const createStoreFromSlices = (slices?: Slices) => {
  if (slices) {
    return create<AllSlices>(
      immer((...args) => {
        return Object.values(slices).reduce(
          (acc, sliceCreator) => ({
            ...acc,
            ...sliceCreator(...args),
          }),
          {} as AllSlices,
        )
      }),
    )
  }
  return null
}
