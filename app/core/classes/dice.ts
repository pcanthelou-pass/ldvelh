export class Dice {
  private readonly side: number

  constructor(side: number = 6) {
    this.side = side
  }

  roll(rolls: number = 1) {
    return Array<number>(rolls)
      .fill(1 + Math.floor(Math.random() * this.side))
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  }
}

export const D6 = (): number => new Dice().roll()

export const D6x2 = (): number => new Dice().roll(2)
