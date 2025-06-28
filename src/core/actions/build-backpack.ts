import { BackpackItems, BackpackItemsStats } from '../types/backpack'
import { ItemBuilder } from '../types/Item-factories'

/**
 * Use this factory to build the items of the game
 */

export const BuildBackpack = (items: BackpackItemsStats): BackpackItems => {
  const bp: BackpackItems = []
  Object.entries(items)
    .filter(([key, item]) => item.quantity > 0)
    .forEach(([key, item]) => {
      bp.push(ItemBuilder(key, item))
    })

  return bp
}

export const EmptyBackpackItems = BuildBackpack({})
