import { BackpackItems } from '@core'
import { BackpackEmptyView } from './components/BackpackEmptyView'
import { BackpackFilledView } from './components/BackpackFilledView'

export type ubtd = {
  key: string
  count: number
}

export const useBackpackToDisplay = (items: BackpackItems): ubtd[] => {
  return items.map((item) => ({ key: item.key, count: item.quantity }))
}

export const Backpack = ({ items }: { items: BackpackItems }) => {
  const arrayOfItems = useBackpackToDisplay(items)
  if (arrayOfItems.length === 0) return <BackpackEmptyView />
  return <BackpackFilledView items={arrayOfItems} />
}
