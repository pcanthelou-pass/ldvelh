import { Character } from '@core'

export const TEST_HERO: Character = {
  name: 'Héro',
  abilities: {
    agility: 8,
    endurance: 18,
    chance: 8,
  },
  items: {
    "Potion d'endurance": {
      quantity: 1,
      value: 10,
      power: 'potion',
      effect: { endurance: 99 },
    },
  },
}
