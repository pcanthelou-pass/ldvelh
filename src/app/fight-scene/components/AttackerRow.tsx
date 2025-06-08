import { Text, View } from 'react-native'

interface AttackerRowProps {
  name: string
  agility: number
  endurance: number
}
export const AttackerRow = ({ name, agility, endurance }: AttackerRowProps) => (
  <View>
    <Text>{`${name} - Agilité : ${agility} - Endurance : ${endurance}`}</Text>
  </View>
)
