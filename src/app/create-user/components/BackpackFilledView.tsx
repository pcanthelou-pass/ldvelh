import { Paragraph } from '@ui'
import { ubtd } from '../Backpack'
import { BackpackHeader } from './BackpackHeader'

export const BackpackFilledView = ({ items }: { items: ubtd[] }) => {
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
