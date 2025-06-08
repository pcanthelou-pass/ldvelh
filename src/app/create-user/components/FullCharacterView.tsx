import { Text, View } from 'react-native'

interface Character {
  name: string
  agility: number
  endurance: number
  chance: number
}

export const FullCharacterView = ({
  name,
  agility,
  endurance,
  chance,
}: Character) => {
  return (
    <View>
      <Text>{name ?? 'Personnage'}</Text>
      <Text>Agilité : {agility}</Text>
      <Text>Endurance : {endurance}</Text>
      <Text>Chance : {chance}</Text>
    </View>
  )
}
