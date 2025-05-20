export interface ItemsProps {
  quantity: number
  value: number
  power?: string
  effect?: object
}

export type Items = Record<string, ItemsProps>
