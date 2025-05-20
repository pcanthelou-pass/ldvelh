export interface ItemsProps {
  quantity: number
  value: number
}

export type Items = Record<string, ItemsProps>
