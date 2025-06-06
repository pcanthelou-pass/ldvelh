import { Dice } from '../dice'

describe('Dice', () => {
  it('Should roll a 12 for one roll of a 12 side dice', () => {
    const dice = new Dice(12)
    dice.randomizer = () => 1

    expect(dice.roll()).toBe(12)
  })
  it('Should roll a 6 for one roll', () => {
    const dice = new Dice()
    dice.randomizer = () => 1

    expect(dice.roll()).toBe(6)
  })

  it('Should roll a 18 for 3 rolls', () => {
    const dice = new Dice()
    dice.randomizer = () => 1

    expect(dice.roll(3)).toBe(18)
  })
})
