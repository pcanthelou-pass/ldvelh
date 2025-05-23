import { GameActions, Items, ItemsProps } from '@core'
import { ItemPowers } from '@core/slices/items'

/*
  items: {
    "Potion d'endurance": {
      quantity: 1,
      value: 10,
      power: 'potion',
      effect: { endurance: 99 },
    },
  },
*/

export interface Item {
  name: string
  action: (store?: GameActions) => void
}

export type ItemBuilderProps = ItemsProps & { name: string }

export const createItemTypeDefault = (item: ItemBuilderProps): Item => {
  return {
    name: item.name,
    action: () => {},
  }
}
export const createItemTypePotion = (item: ItemBuilderProps): Item => {
  return {
    name: `Boire la ${item.name.toLocaleLowerCase()}`,
    action: (store: GameActions) => {
      store.resetEndurance()
      store.consumeItemByOne(item.name)
    },
  }
}

export type ItemFactory = (item: ItemBuilderProps) => Item

export const ItemFactories: Record<string, ItemFactory> = {
  default: createItemTypeDefault,
  potion: createItemTypePotion,
}

export const ItemBuilder = (item: ItemBuilderProps): Item => {
  let key: ItemPowers = item.power
  if (!ItemFactories.hasOwnProperty(key)) {
    key = 'default'
  }
  const factory: ItemFactory = ItemFactories[key]
  return factory(item)
}

export const getActionableItems = (items: Items): Item[] => {
  return Object.entries(items)
    .filter(([key, item]) => item.quantity > 0)
    .map(([key, item]) => {
      return ItemBuilder({ ...item, name: key })
    })
}
