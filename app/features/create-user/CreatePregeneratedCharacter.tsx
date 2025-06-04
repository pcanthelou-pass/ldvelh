import { usePregeneratedCharacter } from '@core'
import { Button, View } from 'react-native'
import { Backpack } from './Backpack'
import { CreatePregeneratedCharacterView } from './components/CreatePregeneratedCharacterView'

export const CreatePregeneratedCharacter = () => {
  const character = usePregeneratedCharacter()
  const {
    name,
    abilities: { agility, endurance, chance },
    items,
  } = character

  const onPress = () => {}

  return (
    <View>
      <CreatePregeneratedCharacterView
        name={name}
        agility={agility}
        endurance={endurance}
        chance={chance}
      />
      <Backpack items={items} />
      <Button title="Suivant" onPress={onPress} />
    </View>
  )
}
