import { Paragraph } from '@ui'
import { UseBackpackToDisplayType } from '../Backpack'

export const BackpackHeader = ({
  items,
}: {
  items: UseBackpackToDisplayType[]
}) => (
  <Paragraph>
    Le sac à dos contient {items.length} objet{items.length > 1 ? 's' : ''}
  </Paragraph>
)
