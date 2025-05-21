import { Items, useGameStore } from '@core'
import * as pregenerated from '@core/api/character.json'
import { Button } from 'react-native'
import { BackpackView, CreatePregeneratedCharacterView } from './components'

const simpleParser = (items: Items) => {
  return Object.keys(items)
}

export const CreatePregeneratedCharacter = () => {
  const { name, abilities, items } = pregenerated.character
  const { agility, endurance, chance } = abilities
  const { setCharacter } = useGameStore()

  const onPress = () => {
    setCharacter({
      name,
      abilities: {
        agility,
        endurance,
        chance,
      },
      items: {},
    })
  }

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
