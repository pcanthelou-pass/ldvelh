import { Paragraph, TopView } from '@ui'
import { BackpackHeader } from './BackpackHeader'

export const BackpackFilledView = ({ items }: { items: string[] }) => {
  return (
    <TopView>
      <BackpackHeader items={items} />
      <TopView>
        {items.map((item) => (
          <Paragraph key={item}>{item}</Paragraph>
        ))}
      </TopView>
    </TopView>
  )
}
