import { Items } from './items'

export interface CharacterAbilities {
  agility: number
  endurance: number
  chance: number
}

export interface Character {
  name: string
  abilities: CharacterAbilities
  items: Items
}

export const EmptyCharacter: Character = {
  name: '',
  abilities: { agility: 0, endurance: 0, chance: 0 },
  items: {},
}
