import { Dice } from '../types/dice'

export const D6 = (rolls: number = 1, randomizer?: () => number): number => {
  const dice = new Dice()
  if (randomizer) dice.randomizer = randomizer
  return dice.roll(rolls)
}

export const D6x2 = (): number => D6(2)
