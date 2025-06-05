import { AttackerProps } from './attacker'

export class Fight {
  opponent: AttackerProps
  hero: AttackerProps
  round: number = 0

  constructor(opponent: AttackerProps, hero: AttackerProps) {
    this.opponent = opponent
    this.hero = hero
    this.round = 0
  }

  resolveRound(): void {
    const opponentAttack = this.opponent.attack()
    const heroAttack = this.hero.attack()
    if (opponentAttack > heroAttack) {
      this.hero.abilities.endurance -= this.opponent.hit()
    }
    if (opponentAttack < heroAttack) {
      this.opponent.abilities.endurance -= this.hero.hit()
    }
    this.round++
  }

  get heroEndurance(): number {
    return this.hero.abilities.endurance
  }

  get opponentEndurance(): number {
    return this.opponent.abilities.endurance
  }
  get heroIsDead(): boolean {
    return this.hero.abilities.endurance === 0
  }

  get opponentIsDead(): boolean {
    return this.opponent.abilities.endurance === 0
  }

  get canContinue(): boolean {
    return this.opponentEndurance > 0 && this.heroEndurance > 0
  }
}
