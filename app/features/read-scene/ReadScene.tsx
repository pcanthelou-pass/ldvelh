import {
  BookScene,
  EmptyBookScene,
  FailureBookScene,
  FightBookScene,
  getActionableItems,
  Item,
  NormalBookScene,
  SuccessBookScene,
  useGameStore,
} from '@core'
import { useState } from 'react'
import { FightScene } from './FightScene'
import {
  ReadSceneEmptyView,
  ReadSceneFailureView,
  ReadSceneFightView,
  ReadSceneNormalView,
  ReadSceneSuccessView,
} from './components'

export const ReadScene = ({
  onPressActionExt,
  onPressItemExt,
  onPressQuitExt,
  onPressFightExt,
}: {
  onPressActionExt?: (key: string) => void
  onPressItemExt?: (item: Item) => void
  onPressQuitExt?: () => void
  onPressFightExt?: () => void
}) => {
  const [fightingMode, setFightingMode] = useState(false)
  const store = useGameStore()
  const { currentScene, gameBook, character, moveToScene, quitGame } = store
  const { scenes } = gameBook

  const theScene: BookScene = scenes
    ? scenes.getScene(currentScene)
    : new EmptyBookScene()

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

  const onPressFight = () => {
    setFightingMode(true)
    onPressFightExt?.()
  }

  if (fightingMode) {
    return FightScene(theScene.opponent, character)
  }

  switch (true) {
    case theScene instanceof EmptyBookScene:
      return <ReadSceneEmptyView />
    case theScene instanceof NormalBookScene:
      return ReadSceneNormalView(
        theScene.text,
        items,
        onPressItem,
        theScene.nextScenes,
        onPressAction,
      )
    case theScene instanceof FightBookScene:
      return ReadSceneFightView(theScene.text, onPressFight)
    case theScene instanceof SuccessBookScene:
      return ReadSceneSuccessView(theScene.text, onPressQuit)
    case theScene instanceof FailureBookScene:
      return ReadSceneFailureView(theScene.text, onPressQuit)
  }
}
