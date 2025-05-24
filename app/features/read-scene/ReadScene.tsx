import { useGameStore } from '@core'
import { getActionableItems, Item } from '@core/hooks'
import {
  ReadSceneEmptyView,
  ReadSceneFailureView,
  ReadSceneNormalView,
  ReadSceneSuccessView,
} from './components'
import { useReadScene } from './hooks'

export const ReadScene = ({
  onPressActionExt,
  onPressItemExt,
  onPressQuitExt,
}: {
  onPressActionExt?: (key: string) => void
  onPressItemExt?: (item: Item) => void
  onPressQuitExt?: () => void
}) => {
  const store = useGameStore()
  const { currentScene, gameBook, character, moveToScene, quitGame } = store
  const { scenes } = gameBook
  const { sceneText, actions, kind } = useReadScene(currentScene, scenes)
  const items = getActionableItems(character.items)

  const onPressAction = (key: string) => {
    moveToScene(key)
    onPressActionExt?.(key)
  }

  const onPressItem = (item: Item) => {
    item.action(store)
    onPressItemExt?.(item)
  }

  const onPressQuit = () => {
    quitGame()
    onPressQuitExt?.()
  }

  switch (kind) {
    case 'empty':
      return <ReadSceneEmptyView />
    case 'normal':
      return ReadSceneNormalView(
        sceneText,
        items,
        onPressItem,
        actions,
        onPressAction,
      )
    case 'success':
      return ReadSceneSuccessView(sceneText, onPressQuit)
    case 'failure':
      return ReadSceneFailureView(sceneText, onPressQuit)
  }
}
