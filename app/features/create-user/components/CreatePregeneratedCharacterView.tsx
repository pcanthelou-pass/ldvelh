import { Text, View } from 'react-native'

interface Character {
  name: string
  agility: number
  endurance: number
  chance: number
}

export const CreatePregeneratedCharacterView = ({
  name,
  agility,
  endurance,
  chance,
}: Character) => {
  return (
    <View>
      <Text>Personnage</Text>
      <Text>Agilité : {agility}</Text>
      <Text>Endurance : {endurance}</Text>
      <Text>Chance : {chance}</Text>
    </View>
  )
}
