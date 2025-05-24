import { Item } from '@core/hooks'
import { SceneInfo } from '@core/hooks/bookStore'
import { View } from 'react-native'
import { ItemsActionsView } from './ItemsActionsView'
import { ReadSceneActions } from './ReadSceneActions'
import { ReadSceneView } from './ReadSceneView'

export const ReadSceneNormalView = (
  sceneText: string,
  items: Item[],
  onPressItem: (item: Item) => void,
  actions: SceneInfo[] | null | undefined,
  onPressAction: (key: string) => void,
) => {
  return (
    <View>
      <ReadSceneView>{sceneText}</ReadSceneView>
      <ItemsActionsView items={items} onPress={onPressItem} />
      <ReadSceneActions actions={actions} onPress={onPressAction} />
    </View>
  )
}
