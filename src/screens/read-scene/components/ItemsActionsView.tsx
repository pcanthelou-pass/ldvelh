import { BackpackItems, ItemProps } from '@types'
import { Button, View } from 'react-native'

export const ItemsActionsView = ({
  items,
  onPress,
}: {
  items: BackpackItems
  onPress: (item: ItemProps) => void
}) => {
  return items.map((item) => (
    <View key={item.name}>
      <Button
        title={item.name}
        onPress={() => {
          onPress(item)
        }}
      />
    </View>
  ))
}
