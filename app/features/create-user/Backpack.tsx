import { BackpackItems } from '@core'
import { BackpackEmptyView } from './components/BackpackEmptyView'
import { BackpackFilledView } from './components/BackpackFilledView'

export const useBackpackToDisplay = (items: BackpackItems): string[] => {
  return Array.from(items.keys())
}

export const Backpack = ({ items }: { items: BackpackItems }) => {
  const arrayOfItems = useBackpackToDisplay(items)
  if (arrayOfItems.length === 0) return <BackpackEmptyView />
  return <BackpackFilledView items={arrayOfItems} />
}
