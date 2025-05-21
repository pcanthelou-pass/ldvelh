import { useGameStore } from '@core'
import { View } from 'react-native'
import {
  ReadSceneActions,
  ReadSceneEmptyView,
  ReadSceneView,
} from './components'
import { useReadScene } from './hooks'

export const ReadScene = ({
  onPressActionExt,
}: {
  onPressActionExt?: (key: string) => void
}) => {
  const { currentScene, gameBook } = useGameStore()
  const { scenes } = gameBook
  const { sceneText, actions } = useReadScene(currentScene, scenes)

  const onPressAction = (key: string) => {
    onPressActionExt?.(key)
  }

  return currentScene.length > 0 ? (
    <View>
      <ReadSceneView>{sceneText}</ReadSceneView>
      <ReadSceneActions actions={actions} onPress={onPressAction} />
    </View>
  ) : (
    <ReadSceneEmptyView />
  )
}
