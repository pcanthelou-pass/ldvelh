import { Ability } from '@ui'
import { View } from 'react-native'

interface AttackerRowProps {
  name: string
  agility: number
  endurance: number
  isTouched: boolean
}
export const AttackerRow = ({
  name,
  agility,
  endurance,
  isTouched,
}: AttackerRowProps) => (
  <View style={{ width: '100%', backgroundColor: isTouched ? 'red' : 'white' }}>
    <Ability label={name} value={endurance} />
  </View>
)
