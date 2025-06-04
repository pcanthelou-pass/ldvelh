import { ItemProps, useGameStore } from '@core'
import { useState } from 'react'
import { FightScene } from './FightScene'
import { ReadSceneEmptyView } from './components/ReadSceneEmptyView'
import { ReadSceneFailureView } from './components/ReadSceneFailureView'
import { ReadSceneFightView } from './components/ReadSceneFightView'
import { ReadSceneNormalView } from './components/ReadSceneNormalView'
import { ReadSceneSuccessView } from './components/ReadSceneSuccessView'

export const ReadScene = ({
  onPressActionExt,
  onPressItemExt,
  onPressQuitExt,
  onPressFightExt,
}: {
  onPressActionExt?: (key: string) => void
  onPressItemExt?: (item: ItemProps) => void
  onPressQuitExt?: () => void
  onPressFightExt?: () => void
}) => {
  const [fightingMode, setFightingMode] = useState(false)
  const store = useGameStore((state) => state)
  const { currentScene, character, moveToScene, quitGame } = store

  const items = character.items

  const onPressAction = (key: string) => {
    moveToScene(key)
    onPressActionExt?.(key)
  }

  const onPressItem = (item: ItemProps) => {
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
    return FightScene(currentScene.opponent, character)
  }

  switch (true) {
    case currentScene.id === '':
      return <ReadSceneEmptyView />
    case !!currentScene.opponent:
      return ReadSceneFightView(currentScene.text, onPressFight)
    case currentScene.isEnding && currentScene.endingType === 'success':
      return ReadSceneSuccessView(currentScene.text, onPressQuit)
    case currentScene.isEnding && currentScene.endingType === 'failure':
      return ReadSceneFailureView(currentScene.text, onPressQuit)
    default:
      return ReadSceneNormalView(
        currentScene.text,
        items,
        onPressItem,
        currentScene.actions,
        onPressAction,
      )
  }
}
