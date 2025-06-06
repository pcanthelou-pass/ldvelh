import { TEST_HERO } from '@/src/shared'
import { BuildBackpack, EmptyBackpackItems } from '../build-backpack'

describe('BuildBackpack', () => {
  it('should build an empty backpack', () => {
    expect(EmptyBackpackItems.size).toBe(0)
  })

  it('should build a hero backpack', () => {
    const bp = BuildBackpack(TEST_HERO.items)

    expect(bp.size).toBe(1)
    expect(bp.get("Potion d'endurance")).toHaveProperty('name')
  })
})
