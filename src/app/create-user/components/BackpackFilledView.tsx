import { Paragraph } from '@ui'
import { BackpackHeader } from './BackpackHeader'

export const BackpackFilledView = ({ items }: { items: string[] }) => {
  return (
    <>
      <BackpackHeader items={items} />
      {items.map((item) => (
        <Paragraph key={item}>{item}</Paragraph>
      ))}
    </>
  )
}
