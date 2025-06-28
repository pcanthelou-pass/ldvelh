import { Paragraph } from '@ui'
import { UseBackpackToDisplayType } from '../Backpack'
import { BackpackHeader } from './BackpackHeader'

export const BackpackFilledView = ({
  items,
}: {
  items: UseBackpackToDisplayType[]
}) => {
  return (
    <>
      <BackpackHeader items={items} />
      {items.map((item) => (
        <Paragraph key={item.key}>
          {item.key} x{item.count}
        </Paragraph>
      ))}
    </>
  )
}
