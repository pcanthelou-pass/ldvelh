import { Text } from 'react-native'

export const BackpackHeader = ({ items }: { items: string[] }) => (
  <Text>
    {items.length} objet{items.length > 1 ? 's' : ''}
  </Text>
)
