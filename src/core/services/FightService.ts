import { AttackerProps, Fight } from '../types'

/**
 * FightService encapsulates combat operations based on the {@link Fight} class.
 * It exposes high level methods used by hooks and components to resolve rounds
 * or apply chance outcomes while keeping track of wounds and endurance.
 *
 * Example usage:
 * const service = new FightService(opponent, hero)
 * service.resolveRound()
 * console.log(service.heroEndurance)
 */
export class FightService {
  private fight: Fight

  constructor(opponent: AttackerProps, hero: AttackerProps) {
    this.fight = new Fight(opponent, hero)
  }

  /** Reset the underlying fight with new attackers */
  reset(opponent: AttackerProps, hero: AttackerProps): void {
    this.fight = new Fight(opponent, hero)
  }

  /** Run a combat round between the hero and the opponent */
  resolveRound(): void {
    this.fight.doResolveRound()
  }

  /** Apply a successful use of chance */
  applyChanceSuccess(): void {
    this.fight.doSuccessChance()
  }

  /** Apply a failed use of chance */
  applyChanceFailure(): void {
    this.fight.doFailChance()
  }

  /** Flee the fight: the hero receives a default wound */
  flee(): void {
    this.fight.doWoundHero(2)
  }

  // Expose useful computed values
  get heroEndurance(): number {
    return this.fight.heroEndurance
  }

  get opponentEndurance(): number {
    return this.fight.opponentEndurance
  }

  get heroWound(): number {
    return this.fight.heroWound
  }

  get opponentWound(): number {
    return this.fight.opponentWound
  }

  get heroHasBeenTouched(): boolean {
    return this.fight.heroHasBeenTouched
  }

  get opponentHasBeenTouched(): boolean {
    return this.fight.opponentHasBeenTouched
  }

  get heroIsDead(): boolean {
    return this.fight.heroIsDead
  }

  get canContinue(): boolean {
    return this.fight.canContinue
  }
}
