import { BackpackItems, ItemProps } from '@core'
import { Button, View } from 'react-native'

export const ItemsActionsView = ({
  items,
  onPress,
}: {
  items: BackpackItems
  onPress: (item: ItemProps) => void
}) => {
  return Array.from(items).map(([key, item]) => (
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
