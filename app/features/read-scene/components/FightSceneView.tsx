import { OpponentType } from '@core/classes/opponenttype'
import { Text, View } from 'react-native'

export const FightSceneView: React.FC<{
  sceneInfo: OpponentType
  children: React.ReactNode
}> = ({ sceneInfo, children }) => (
  <View>
    <View>
      <Text>Combat</Text>
    </View>
    <View>
      <Text>{sceneInfo.text}</Text>
    </View>
    {children}
  </View>
)
