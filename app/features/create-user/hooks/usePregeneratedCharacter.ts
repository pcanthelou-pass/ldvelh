import { Items, useGameStore } from '@core'
import * as pregenerated from '@core/api/character.json'

export const usePregeneratedCharacter = () => {
  const { name, abilities, items } = pregenerated.character
  const { agility, endurance, chance } = abilities

  const { setCharacter } = useGameStore()

  const onSetCharacter = () => {
    setCharacter({
      name,
      abilities: {
        agility,
        endurance,
        chance,
      },
      items: items as unknown as Items,
    })
  }

  return { name, agility, endurance, chance, items, onSetCharacter }
}
