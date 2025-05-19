import { createStoreFromSlices, Slices } from '@core'

/**
 * Calcul dynamique des slices
 */
export type AllSlices =
  ReturnType<Slices[keyof Slices]> extends infer R
    ? R extends object
      ? R
      : never
    : never

export type StoreFromSlices = ReturnType<typeof createStoreFromSlices>
