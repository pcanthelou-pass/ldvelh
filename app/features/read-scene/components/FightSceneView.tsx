import { Attacker } from '@core'
import { Text, View } from 'react-native'

export const FightSceneView: React.FC<{
  opponent: Attacker
  children: React.ReactNode
}> = ({ opponent, children }) => (
  <View>
    <View>
      <Text>Combat</Text>
    </View>
    <View>
      <Text>{opponent.text}</Text>
    </View>
    {children}
  </View>
)
