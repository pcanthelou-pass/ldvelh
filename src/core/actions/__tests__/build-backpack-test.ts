import { TEST_HERO } from '@shared'
import { BuildBackpack, EmptyBackpackItems } from '../build-backpack'

describe('BuildBackpack', () => {
  it('should build an empty backpack', () => {
    expect(EmptyBackpackItems.length).toBe(0)
  })

  it('should build a hero backpack', () => {
    const bp = BuildBackpack(TEST_HERO.items)

    expect(bp.length).toBe(2)
    expect(bp[0]).toHaveProperty('name', "Boire la potion d'endurance")
    expect(bp[0]).toHaveProperty('quantity', 2)
    expect(bp[0]).toHaveProperty('value', 10)
    expect(bp[0]).toHaveProperty('power', 'potion')
    expect(bp[0]).toHaveProperty('effect')
  })
})
