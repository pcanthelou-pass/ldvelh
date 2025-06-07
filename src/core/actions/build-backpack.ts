import { ItemBuilder } from '@core'
import { BackpackItems, BackpackItemsStats } from '../types/backpack'

/**
 * Use this factory to build the items of the game
 */

export const BuildBackpack = (items: BackpackItemsStats): BackpackItems => {
  const bp = new Map()
  Object.entries(items)
    .filter(([key, item]) => item.quantity > 0)
    .forEach(([key, item]) => {
      bp.set(key, ItemBuilder(key, item))
    })

  return bp
}

export const EmptyBackpackItems = BuildBackpack({})
