import { usePregeneratedCharacter } from '@core'
import { Button, View } from 'react-native'
import { useGoToReadIntroduction } from '../../navigation/useGoToReadIntroduction'
import { Backpack } from './Backpack'
import { CreatePregeneratedCharacterView } from './components/CreatePregeneratedCharacterView'

export const CreatePregeneratedCharacter = () => {
  const { name, agility, endurance, chance, items } = usePregeneratedCharacter()
  const route = useGoToReadIntroduction()

  const onPress = () => {
    route()
  }

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
