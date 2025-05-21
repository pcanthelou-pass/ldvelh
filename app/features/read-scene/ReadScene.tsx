import {
  getSceneInfosRaw,
  SceneKey,
  ScenePathway,
  Scenes,
  useGameStore,
} from '@core'
import React from 'react'
import { Button, Text, View } from 'react-native'

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

const ReadSceneActions = ({
  actions,
  onPress,
}: {
  actions: ScenePathway
  onPress: (dest: string) => void
}) => {
  return Object.entries(actions).map((entry) => (
    <Button
      key={entry[0]}
      testID={`Choice${entry[1].dest}`}
      title={entry[1].question}
      onPress={() => {
        onPress(entry[1].dest)
      }}
    />
  ))
}

const ReadSceneEmptyView = () => (
  <View>
    <Text>Pas de scène !</Text>
  </View>
)

export const ReadSceneView = ({ children }: { children: React.ReactNode }) => (
  <View>
    <Text>{children}</Text>
  </View>
)

export const useReadScene = (current: SceneKey, scenes: Scenes | null) => {
  if (scenes !== null) {
    const waypoints = getSceneInfosRaw(current, scenes)
    return { actions: waypoints, sceneText: scenes[current]?.text ?? '' }
  } else {
    return { actions: undefined, sceneText: '' }
  }
}
