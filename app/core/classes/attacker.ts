import { CharacterAbilities } from './character-abilities'
import { D6x2 } from './dice'

export type RoundAttackType = (attacker?: Attacker) => number

export class Attacker {
  name: string
  abilities: CharacterAbilities
  description?: string
  _attack?: RoundAttackType

  constructor({
    name,
    description,
    abilities,
    attack,
  }: {
    name: string
    abilities: CharacterAbilities
    description?: string
    chance?: number
    attack?: RoundAttackType
  }) {
    this.name = name
    this.abilities = abilities
    this.description = description
    this._attack = attack
  }

  static fromJson({
    name,
    description,
    abilities,
  }: {
    name: string
    description: string
    abilities: CharacterAbilities
  }): Attacker {
    return new Attacker({ name, abilities, description })
  }

  attack(): number {
    if (!this?.abilities?.agility)
      throw Error(`Attacker has no abilities:${JSON.stringify(this.abilities)}`)
    return this._attack?.(this) ?? this.abilities.agility + D6x2()
  }

  getEndurance(): number {
    return this.abilities.endurance
  }

  alive(): boolean {
    return this.abilities.endurance > 0
  }

  hit(value: number = 2): void {
    this.abilities.endurance -= value
  }
}
