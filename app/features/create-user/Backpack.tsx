import { Items } from '@core'
import { useItemSimpleParser } from '@core/hooks'
import { BackpackEmptyView } from './components/BackpackEmptyView'
import { BackpackFilledView } from './components/BackpackFilledView'

export const Backpack = ({ items }: { items: Items }) => {
  const arrayOfItems = useItemSimpleParser(items)
  return arrayOfItems.length === 0 ? (
    <BackpackEmptyView />
  ) : (
    <BackpackFilledView items={arrayOfItems} />
  )
}
