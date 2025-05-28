import { D6x2 } from './dice'

export type RoundAttackType = (attacker?: Attacker) => number

export class Attacker {
  name: string
  endurance: number
  agility: number
  chance?: number
  text?: string
  _attack?: RoundAttackType

  constructor({
    name,
    text,
    endurance,
    agility,
    chance,
    attack,
  }: {
    name: string
    text?: string
    endurance: number
    agility: number
    chance?: number
    attack?: RoundAttackType
  }) {
    this.name = name
    this.text = text
    this.endurance = endurance
    this.agility = agility
    this.chance = chance
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
