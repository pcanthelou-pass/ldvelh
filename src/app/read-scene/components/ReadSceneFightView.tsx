import { Button, View } from 'react-native'
import { ReadSceneView } from './ReadSceneView'

export const ReadSceneFightView = ({
  sceneText,
  onPressFight,
}: {
  sceneText: string
  onPressFight: () => void
}) => (
  <View>
    <ReadSceneView>{sceneText}</ReadSceneView>
    <Button title="Combattre" onPress={onPressFight} />
  </View>
)
