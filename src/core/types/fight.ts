import { AttackerProps } from './attacker'

export class Fight {
  opponent: AttackerProps
  hero: AttackerProps
  round: number = 0
  heroWound: number
  opponentWound: number
  heroHasBeenTouched: boolean
  opponentHasBeenTouched: boolean

  constructor(opponent: AttackerProps, hero: AttackerProps) {
    this.opponent = opponent
    this.hero = hero
    this.heroWound = 0
    this.opponentWound = 0
    this.round = 0
    this.heroHasBeenTouched = false
    this.opponentHasBeenTouched = false
  }

  doResolveRound(): void {
    const opponentAttack = this.opponent.attack()
    const heroAttack = this.hero.attack()
    this.heroHasBeenTouched = false
    this.opponentHasBeenTouched = false
    if (opponentAttack > heroAttack) {
      this.heroWound += this.opponent.hit()
      this.heroHasBeenTouched = true
    }
    if (opponentAttack < heroAttack) {
      this.opponentWound += this.hero.hit()
      this.opponentHasBeenTouched = true
    }
    this.round++
  }

  doWoundHero(hit: number = 2): void {
    this.heroWound += hit
    this.heroHasBeenTouched = true
  }

  doSuccessChance(): void {
    if (this.heroHasBeenTouched) {
      this.heroWound -= 1
    }
    if (this.opponentHasBeenTouched) {
      this.opponentWound += 2
    }
  }

  doFailChance(): void {
    if (this.heroHasBeenTouched) {
      this.heroWound += 1
    }
    if (this.opponentHasBeenTouched) {
      this.opponentWound -= 1
    }
  }

  get heroEndurance(): number {
    return this.hero.abilities.endurance - this.heroWound
  }

  get opponentEndurance(): number {
    return this.opponent.abilities.endurance - this.opponentWound
  }

  get heroIsDead(): boolean {
    return this.heroWound >= this.hero.abilities.endurance
  }

  get opponentIsDead(): boolean {
    return this.opponentWound >= this.opponent.abilities.endurance
  }

  get canContinue(): boolean {
    return !this.heroIsDead && !this.opponentIsDead
  }
}
