import { Button, View } from 'react-native'
import { ReadSceneView } from './ReadSceneView'

export const ReadSceneFightView = (
  sceneText: string,
  onPressFight: () => void,
) => {
  return (
    <View>
      <ReadSceneView>{sceneText}</ReadSceneView>
      <Button title="Combattre" onPress={onPressFight} />
    </View>
  )
}
