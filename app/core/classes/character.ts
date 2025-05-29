import { CharacterAbilities, EmptyAbilities } from './character-abilities'
import { Items } from './items'

export interface Character {
  name: string
  abilities: CharacterAbilities
  items: Items
}

export const EmptyCharacter: Character = {
  name: '',
  abilities: EmptyAbilities,
  items: {},
}
