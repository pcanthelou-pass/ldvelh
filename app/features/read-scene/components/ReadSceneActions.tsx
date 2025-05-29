import { BookScene } from '@core'
import { Button } from 'react-native'

export const ReadSceneActions = ({
  actions,
  onPress,
}: {
  actions: BookScene[]
  onPress: (dest: string) => void
}) => {
  return Object.entries(actions).map((entry) => (
    <Button
      key={entry[0]}
      testID={`Choice${entry[1].id}`}
      title={entry[1].question}
      onPress={() => {
        onPress(entry[1].id)
      }}
    />
  ))
}
