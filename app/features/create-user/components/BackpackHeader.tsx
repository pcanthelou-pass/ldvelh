import { Text } from 'react-native'

export const BackpackHeader = ({ items }: { items: string[] }) => (
  <Text>{items.length} objets</Text>
)
