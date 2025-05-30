import { Item } from '@core'
import { Button, View } from 'react-native'

export const ItemsActionsView = ({
  items,
  onPress,
}: {
  items: Item[]
  onPress: (item: Item) => void
}) => {
  return items.map((item) => {
    return (
      <View key={item.name}>
        <Button
          title={item.name}
          onPress={() => {
            onPress(item)
          }}
        />
      </View>
    )
  })
}
