import { useGameStore } from '@core'
import { getActionableItems, Item } from '@core/hooks'
import { View } from 'react-native'
import {
  ItemsActionsView,
  ReadSceneActions,
  ReadSceneEmptyView,
  ReadSceneView,
} from './components'
import { useReadScene } from './hooks'

export const ReadScene = ({
  onPressActionExt,
  onPressItemExt,
}: {
  onPressActionExt?: (key: string) => void
  onPressItemExt?: (item: Item) => void
}) => {
  const store = useGameStore()
  const { currentScene, gameBook, character } = store
  const { scenes } = gameBook
  const { sceneText, actions } = useReadScene(currentScene, scenes)
  const items = getActionableItems(character.items)

  const onPressAction = (key: string) => {
    onPressActionExt?.(key)
  }
  const onPressItem = (item: Item) => {
    item.action(store)
    onPressItemExt?.(item)
  }

  return currentScene.length > 0 ? (
    <View>
      <ReadSceneView>{sceneText}</ReadSceneView>
      <ItemsActionsView items={items} onPress={onPressItem} />
      <ReadSceneActions actions={actions} onPress={onPressAction} />
    </View>
  ) : (
    <ReadSceneEmptyView />
  )
}
