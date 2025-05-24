import { Button, Text, View } from 'react-native'
import { ReadSceneView } from './ReadSceneView'

export const ReadSceneSuccessView = (
  sceneText: string,
  onPressQuit: () => void,
) => {
  return (
    <View>
      <Text>Vous avez réussi !!!</Text>
      <ReadSceneView>{sceneText}</ReadSceneView>
      <Button title="Quitter" onPress={onPressQuit} />
    </View>
  )
}
