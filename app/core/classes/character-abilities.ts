export class CharacterAbilities {
  agility: number
  endurance: number
  chance: number

  constructor({
    agility,
    endurance,
    chance,
  }: {
    agility: number
    endurance: number
    chance: number
  }) {
    this.agility = agility
    this.endurance = endurance
    this.chance = chance
  }
}

export const EmptyAbilities = new CharacterAbilities({
  agility: 0,
  endurance: 0,
  chance: 0,
})
