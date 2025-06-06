import { ItemProps, useGameStore } from '@/src/core'
import { useRouter } from 'expo-router'
import { ReadSceneEmptyView } from './components/ReadSceneEmptyView'
import { ReadSceneFailureView } from './components/ReadSceneFailureView'
import { ReadSceneFightView } from './components/ReadSceneFightView'
import { ReadSceneNormalView } from './components/ReadSceneNormalView'
import { ReadSceneSuccessView } from './components/ReadSceneSuccessView'

export const ReadScene = ({
  onPressActionExt,
  onPressItemExt,
  onPressQuitExt,
}: {
  onPressActionExt?: (key: string) => void
  onPressItemExt?: (item: ItemProps) => void
  onPressQuitExt?: () => void
}) => {
  const store = useGameStore((state) => state)
  const router = useRouter()
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
    router.replace('/choose-story')
  }

  const views = BuildSceneByPredicate(onPressQuit, onPressItem, onPressAction)

  const { render } = views.find((v) => v.predicate())!

  return render()
}

function BuildSceneByPredicate(
  onPressQuit: () => void,
  onPressItem: (item: ItemProps) => void,
  onPressAction: (key: string) => void,
) {
  const store = useGameStore((state) => state)
  const { currentScene, character } = store

  const items = character.items

  const router = useRouter()

  return [
    {
      predicate: () => currentScene.id === '',
      render: () => <ReadSceneEmptyView />,
    },
    {
      predicate: () =>
        !!currentScene.opponent &&
        currentScene.opponent.abilities.endurance > 0,
      render: () => (
        <ReadSceneFightView
          sceneText={currentScene.text}
          onPressFight={() => {
            router.push('/read-scene/fight-scene')
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
      predicate: () => !currentScene.isEnding,
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
