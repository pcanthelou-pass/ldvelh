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
  const store = useGameStore((state) => state)
  const { moveToScene, quitGame } = store

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

  const views = BuildSceneByPredicate(
    onPressFightExt ?? (() => {}),
    onPressQuit,
    onPressItem,
    onPressAction,
  )

  const { render } = views.find((v) => v.predicate())!

  return render()
}

function BuildSceneByPredicate(
  onPressFightExt: () => void,
  onPressQuit: () => void,
  onPressItem: (item: ItemProps) => void,
  onPressAction: (key: string) => void,
) {
  const [fightingMode, setFightingMode] = useState(false)
  const store = useGameStore((state) => state)
  const { currentScene, character } = store

  const items = character.items

  return [
    {
      predicate: () => currentScene.id === '',
      render: () => <ReadSceneEmptyView />,
    },
    {
      predicate: () => !currentScene.isEnding && fightingMode,
      render: () => <FightScene />,
    },
    {
      predicate: () => !fightingMode && !!currentScene.opponent,
      render: () => (
        <ReadSceneFightView
          sceneText={currentScene.text}
          onPressFight={() => {
            setFightingMode(true)
            onPressFightExt?.()
          }}
        />
      ),
    },
    {
      predicate: () =>
        currentScene.isEnding && currentScene.endingType === 'success',
      render: () => (
        <ReadSceneSuccessView
          sceneText={currentScene.text}
          onPressQuit={onPressQuit}
        />
      ),
    },
    {
      predicate: () =>
        currentScene.isEnding && currentScene.endingType === 'failure',
      render: () => (
        <ReadSceneFailureView
          sceneText={currentScene.text}
          onPressQuit={onPressQuit}
        />
      ),
    },
    {
      predicate: () =>
        !currentScene.opponent && !fightingMode && !currentScene.isEnding,
      render: () => (
        <ReadSceneNormalView
          sceneText={currentScene.text}
          items={items}
          onPressItem={onPressItem}
          actions={currentScene.actions}
          onPressAction={onPressAction}
        />
      ),
    },
  ]
}
