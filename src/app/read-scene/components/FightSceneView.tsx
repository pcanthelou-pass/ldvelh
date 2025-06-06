import { AttackerProps } from '@/src/core'
import { Text, View } from 'react-native'

export const FightSceneView: React.FC<{
  opponent: AttackerProps
  children: React.ReactNode
}> = ({ opponent, children }) => (
  <View>
    <View>
      <Text>Combat</Text>
    </View>
    <View>
      <Text>{opponent.description}</Text>
    </View>
    {children}
  </View>
)
