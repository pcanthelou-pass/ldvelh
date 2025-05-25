import { Items } from '@core'
import { Button, View } from 'react-native'
import { usePregeneratedCharacter } from '../../core/hooks/usePregeneratedCharacter'
import { Backpack } from './Backpack'
import { CreatePregeneratedCharacterView } from './components'

export const CreatePregeneratedCharacter = () => {
  const { name, agility, endurance, chance, items, onSetCharacter } =
    usePregeneratedCharacter()

  const onPress = () => {
    onSetCharacter()
  }

  return (
    <View>
      <CreatePregeneratedCharacterView
        name={name}
        agility={agility}
        endurance={endurance}
        chance={chance}
      />
      <Backpack items={items as unknown as Items} />
      <Button title="Suivant" onPress={onPress} />
    </View>
  )
}
