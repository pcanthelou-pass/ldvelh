import { Attacker } from './attacker'

export class Fight {
  opponent: Attacker
  hero: Attacker
  round: number = 0

  constructor(opponent: Attacker, hero: Attacker) {
    this.opponent = opponent
    this.hero = hero
    this.round = 0
  }

  resolveRound(): void {
    const opponentAttack = this.opponent.attack()
    const heroAttack = this.hero.attack()
    if (opponentAttack > heroAttack) {
      this.hero.hit()
    }
    if (opponentAttack < heroAttack) {
      this.opponent.hit()
    }
    this.round++
  }

  heroEndurance(): number {
    return this.hero.getEndurance()
  }

  opponentEndurance(): number {
    return this.opponent.getEndurance()
  }

  canContinue(): boolean {
    return this.opponent.alive() && this.hero.alive()
  }
}
