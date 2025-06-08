import { Text, View } from 'react-native'

interface CharacterViewProps {
  name: string
  agility: number
  endurance: number
  chance: number
}
export const CharacterView = ({
  name,
  agility,
  endurance,
  chance,
}: CharacterViewProps) => (
  <View>
    <Text>Héro</Text>
    <Text>{`${name} [Agilité : ${agility} - Endurance : ${endurance} - Chance : ${chance}]`}</Text>
  </View>
)
