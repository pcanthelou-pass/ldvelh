import { Text, View } from 'react-native'

export const BackpackView = ({ items }: { items: string[] }) =>
  items.length === 0 ? (
    <BackpackEmptyView />
  ) : (
    <BackpackFilledView items={items} />
  )

const BackpackEmptyView = () => (
  <View>
    <Text>Sac à dos vide</Text>
  </View>
)

const BackpackFilledView = ({ items }: { items: string[] }) => (
  <View>
    {items.length > 0 && <Text>{items.length} objets</Text>}
    {items.map((item) => (
      <Text key={item}>{item}</Text>
    ))}
  </View>
)
