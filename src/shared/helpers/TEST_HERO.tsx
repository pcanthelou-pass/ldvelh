import { CharacterRawProps } from '@types'

export const TEST_HERO: CharacterRawProps = {
  name: 'Héro',
  abilities: {
    agility: 8,
    endurance: 18,
    chance: 8,
  },
  items: {
    "Potion d'endurance": {
      quantity: 2,
      value: 10,
      power: 'potion',
      effect: { endurance: 99 },
    },
    'Potion de chance': {
      quantity: 1,
      value: 10,
      power: 'potion',
      effect: { chance: 99 },
    },
  },
}
