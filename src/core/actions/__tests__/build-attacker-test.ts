import { BuildAttacker } from '../build-attacker'

describe('Given an Attacker', () => {
  it('Can be built from a JSON', () => {
    const attacker = BuildAttacker({
      name: 'NAME',
      description: 'DESCRIPTION',
      abilities: { agility: 1, endurance: 1, chance: 1 },
    })

    expect(attacker.name).toBe('NAME')
    expect(attacker.abilities).toStrictEqual({
      agility: 1,
      endurance: 1,
      chance: 1,
    })
  })
  it('Can make a default attack', () => {
    const attacker = BuildAttacker({
      name: 'NAME',
      description: 'DESCRIPTION',
      abilities: { agility: 1, endurance: 1, chance: 1 },
    })
    const roll = attacker.attack()
    expect(roll).toBeGreaterThanOrEqual(3)
    expect(roll).toBeLessThanOrEqual(13)
  })
  it('Can make a personalized attack', () => {
    const attFn = jest.fn()
    const attacker = BuildAttacker({
      name: 'NAME',
      description: 'DESCRIPTION',
      abilities: { agility: 1, endurance: 1, chance: 1 },
    })
    attacker.attack = () => {
      attFn()
      return 2
    }
    expect(attFn).toHaveBeenCalledTimes(0)
    attacker.attack()
    expect(attFn).toHaveBeenCalledTimes(1)
  })
  it('Can make damages', () => {
    const attacker = BuildAttacker({
      name: 'NAME',
      description: 'DESCRIPTION',
      abilities: { agility: 1, endurance: 1, chance: 1 },
    })
    expect(attacker.hit()).toBe(2)
  })
})
