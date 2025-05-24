import { D6x2 } from './dice'

export type RoundAttackType = (attacker?: Attacker) => number

export class Attacker {
  endurance: number
  agility: number
  _attack?: RoundAttackType

  constructor({
    endurance,
    agility,
    attack,
  }: {
    endurance: number
    agility: number
    attack?: RoundAttackType
  }) {
    this.endurance = endurance
    this.agility = agility
    this._attack = attack
  }

  attack(): number {
    return this._attack?.(this) ?? this.agility + D6x2()
  }

  getEndurance(): number {
    return this.endurance
  }

  alive(): boolean {
    return this.endurance > 0
  }

  hit(value: number = 2): void {
    this.endurance -= value
  }
}
