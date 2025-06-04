import { EmptyAbilitiesProps } from '../abilities'
import {
  AttackerActionsProps,
  AttackerProps,
  AttackerStatsProps,
} from '../attacker'

describe('Attacker', () => {
  const attackerStats: AttackerStatsProps = {
    name: 'name',
    abilities: EmptyAbilitiesProps,
    description: 'description',
  }
  const attackerActions: AttackerActionsProps = {
    attack: () => 1,
    hit: () => 1,
  }
  const attacker: AttackerProps = { ...attackerStats, ...attackerActions }

  it('Has name and description', () => {
    expect(attacker).toHaveProperty('name')
    expect(attacker).toHaveProperty('description')
  })

  it('Has abilities', () => {
    expect(attacker).toHaveProperty('abilities')
    expect(attacker).toHaveProperty('abilities.agility')
  })

  it('Has actions', () => {
    expect(attacker).toHaveProperty('attack')
    expect(attacker).toHaveProperty('hit')
  })
})
