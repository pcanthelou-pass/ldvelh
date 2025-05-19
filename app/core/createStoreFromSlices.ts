import { AllSlices, Slices } from '@core'
import { create } from 'zustand'

export const createStoreFromSlices = (slices?: Slices) => {
  if (slices) {
    return create<AllSlices>((...args) => {
      return Object.values(slices).reduce(
        (acc, sliceCreator) => ({
          ...acc,
          ...sliceCreator(...args),
        }),
        {} as AllSlices,
      )
    })
  }
  return null
}
