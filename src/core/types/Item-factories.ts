import { GameState } from './game'
import { ItemPower } from './Item-power'
import { ItemProps, ItemStatsProps } from './items'

const BuildItemUnknown: ItemFactory = (
  name: string,
  item: ItemStatsProps,
): ItemProps => ({
  ...item,
  key: name,
  name: `Object inconnu : ${name.toLocaleLowerCase()}`,
  action: (store?: GameState) => {},
})

const BuildItemNormal: ItemFactory = (
  name: string,
  item: ItemStatsProps,
): ItemProps => ({
  ...item,
  key: name,
  name,
  action: (store?: GameState) => {
    if (typeof item?.effect === 'function') {
      item.effect(store)
    }
  },
})

const BuildItemPotion: ItemFactory = (
  name: string,
  item: ItemStatsProps,
): ItemProps => ({
  ...item,
  key: name,
  name: `Boire la ${name.toLocaleLowerCase()}`,
  action: (store?: GameState) => {
    store?.resetEndurance()
    store?.consumeItemByOne(name)
  },
})

type ItemFactory = (name: string, item: ItemStatsProps) => ItemProps

const ItemFactories: Record<ItemPower, ItemFactory> = {
  unknown: BuildItemUnknown,
  normal: BuildItemNormal,
  potion: BuildItemPotion,
}

/**
 * Use by the backpack builder
 * @param name of the item or the key
 * @param item stats
 * @returns a complete item with actions
 */
export const ItemBuilder = (name: string, item: ItemStatsProps): ItemProps => {
  const key: ItemPower = ItemFactories.hasOwnProperty(item.power)
    ? item.power
    : 'unknown'
  return ItemFactories[key](name, item)
}
