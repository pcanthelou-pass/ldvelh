import { AttackerProps } from './attacker'

export class Fight {
  opponent: AttackerProps
  hero: AttackerProps
  round: number = 0
  opponentEndurance: number
  heroWound: number
  heroEndurance: number
  opponentWound: any

  constructor(opponent: AttackerProps, hero: AttackerProps) {
    this.opponent = opponent
    this.hero = hero
    this.opponentEndurance = opponent.abilities.endurance
    this.heroEndurance = hero.abilities.endurance
    this.heroWound = 0
    this.opponentWound = 0
    this.round = 0
  }

  resolveRound(): void {
    const opponentAttack = this.opponent.attack()
    const heroAttack = this.hero.attack()
    if (opponentAttack > heroAttack) {
      this.heroWound += this.opponent.hit()
      this.heroEndurance -= this.opponent.hit()
    }
    if (opponentAttack < heroAttack) {
      this.opponentWound += this.hero.hit()
      this.opponentEndurance -= this.hero.hit()
    }
    this.round++
  }

  get heroIsDead(): boolean {
    return this.heroEndurance === 0
  }

  get opponentIsDead(): boolean {
    return this.opponentEndurance === 0
  }

  get canContinue(): boolean {
    return this.opponentEndurance > 0 && this.heroEndurance > 0
  }
}
