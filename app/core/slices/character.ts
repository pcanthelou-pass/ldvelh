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
