import { Paragraph } from '@ui'

export const BackpackHeader = ({ items }: { items: string[] }) => (
  <Paragraph>
    Le sac à dos contient {items.length} objet{items.length > 1 ? 's' : ''}
  </Paragraph>
)
