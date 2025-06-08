import { useRandomCharacter } from '@core'
import { Button, View } from 'react-native'
import { useGoToReadIntroduction } from '../../navigation/useGoToReadIntroduction'
import { Backpack } from './Backpack'
import { FullCharacterView } from './components/FullCharacterView'

/**
 * A component that displays a randomly generated character with their attributes and items.
 * It allows the user to proceed to the next step in the character creation process.
 */
export const CreateRandomCharacter = () => {
  const { name, agility, endurance, chance, items } = useRandomCharacter()
  const route = useGoToReadIntroduction()

  const onPress = () => {
    route()
  }

  return (
    <View>
      <FullCharacterView
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
