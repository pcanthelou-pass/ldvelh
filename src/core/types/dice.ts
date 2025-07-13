export class Dice {
  private readonly side: number
  randomizer: () => number = Math.random // provide a random value between 0 and 1

  constructor(side: number = 6) {
    this.side = side
  }

  roll(rolls: number = 1) {
    return Array<number>(rolls)
      .fill(1 + Math.floor(this.randomizer() * this.side))
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  }
}
