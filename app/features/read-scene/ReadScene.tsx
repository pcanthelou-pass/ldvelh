import {
  Attacker,
  getActionableItems,
  Item,
  useGameStore,
  useReadScene,
} from '@core'
import { useState } from 'react'
import {
  ReadSceneEmptyView,
  ReadSceneFailureView,
  ReadSceneFightView,
  ReadSceneNormalView,
  ReadSceneSuccessView,
} from './components'
import { FightScene } from './FightScene'

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

  const onPressFight = () => {
    setFightingMode(true)
    onPressFightExt?.()
  }

  if (fightingMode && scenes[currentScene]?.opponent) {
    const opponent = new Attacker({
      name: scenes[currentScene].opponent.name,
      endurance: scenes[currentScene].opponent.endurance,
      agility: scenes[currentScene].opponent.agility,
      text: scenes[currentScene].opponent.text,
    })
    return FightScene(opponent, character)
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
    case 'fight':
      return ReadSceneFightView(sceneText, onPressFight)
    case 'success':
      return ReadSceneSuccessView(sceneText, onPressQuit)
    case 'failure':
      return ReadSceneFailureView(sceneText, onPressQuit)
  }
}
