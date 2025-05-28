export type ItemPowers = 'default' | 'potion'
export interface ItemsProps {
  quantity: number
  value: number
  power: ItemPowers
  effect?: object
}

export type Items = Record<string, ItemsProps>
