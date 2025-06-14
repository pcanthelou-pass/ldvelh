import { Paragraph } from '@ui'
import { ubtd } from '../Backpack'

export const BackpackHeader = ({ items }: { items: ubtd[] }) => (
  <Paragraph>
    Le sac à dos contient {items.length} objet{items.length > 1 ? 's' : ''}
  </Paragraph>
)
