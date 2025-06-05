import { SceneAction } from '@/src/core'
import { Button } from 'react-native'

export const ReadSceneActions = ({
  actions,
  onPress,
}: {
  actions: SceneAction[]
  onPress: (dest: string) => void
}) => {
  return Object.entries(actions).map(([key, action]) => (
    <Button
      key={key}
      testID={`Choice${key}`}
      title={action.label}
      onPress={() => {
        onPress(action.dest)
      }}
    />
  ))
}
