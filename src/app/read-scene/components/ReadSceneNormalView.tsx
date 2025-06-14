import { BackpackItems, ItemProps, SceneAction } from '@core'
import { View } from 'react-native'
import { ItemsActionsView } from './ItemsActionsView'
import { ReadSceneActions } from './ReadSceneActions'
import { ReadSceneView } from './ReadSceneView'

export const ReadSceneNormalView = ({
  sceneText,
  items,
  onPressItem,
  actions,
  onPressAction,
}: {
  sceneText: string
  items: BackpackItems
  onPressItem: (item: ItemProps) => void
  actions: SceneAction[]
  onPressAction: (key: string) => void
}) => {
  return (
    <View style={{ flex: 1 }}>
      <ReadSceneView>{sceneText}</ReadSceneView>
      <View style={{ borderTopWidth: 1 }}>
        <ItemsActionsView items={items} onPress={onPressItem} />
        <ReadSceneActions actions={actions} onPress={onPressAction} />
      </View>
    </View>
  )
}
