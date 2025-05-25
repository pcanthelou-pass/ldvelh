import { Text, View } from 'react-native'
import { BackpackHeader } from './BackpackHeader'

export const BackpackFilledView = ({ items }: { items: string[] }) => {
  return (
    <View>
      <BackpackHeader items={items} />
      {items.map((item) => (
        <Text key={item}>{item}</Text>
      ))}
    </View>
  )
}
