import { View } from 'react-native'
import { Ability } from 'src/shared/ui/Ability'

interface AttackerRowProps {
  name: string
  agility: number
  endurance: number
}
export const AttackerRow = ({ name, agility, endurance }: AttackerRowProps) => (
  <View style={{ width: '100%' }}>
    <Ability label={name} value={endurance} />
  </View>
)
