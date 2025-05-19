import { Items } from '@core'
import { Button } from 'react-native'
import * as pregenerated from '../../core/api/character.json'
import { BackpackView } from './components/BackpackView'
import { CreatePregeneratedCharacterView } from './components/CreatePregeneratedCharacterView'

const simpleParser = (items: Items) => {
  return Object.keys(items)
}

export const CreatePregeneratedCharacter = () => {
  const { name, abilities, items } = pregenerated.character
  const { agility, endurance, chance } = abilities

  const onPress = () => {}

  return (
    <>
      <CreatePregeneratedCharacterView
        name={name}
        agility={agility}
        endurance={endurance}
        chance={chance}
      />
      <BackpackView items={simpleParser(items)} />
      <Button title="Suivant" onPress={onPress} />
    </>
  )
}
