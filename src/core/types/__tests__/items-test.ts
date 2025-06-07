import { BuildBackpack } from '@core'
import { GameState } from '../game'

describe('Backpack', () => {
  it('Can build a empty backpack', () => {
    const bp = BuildBackpack({})

    expect(bp.length).toBe(0)
  })
  describe('Can build a backpack', () => {
    const bp = BuildBackpack({
      "Potion d'endurance": {
        quantity: 1,
        value: 10,
        power: 'potion',
        effect: { endurance: 99 },
      },
    })

    it('Has one item', () => {
      expect(bp.length).toBe(1)
    })

    it('Is contain a potion', () => {
      const item = bp[0]

      expect(item?.name).toBe("Boire la potion d'endurance")
      expect(item?.power).toBe('potion')
    })

    it('Can apply effect', () => {
      const item = bp[0]
      const store = {
        resetEndurance: jest.fn(),
        consumeItemByOne: jest.fn(),
      }
      item?.action(store as unknown as GameState)
      expect(store.resetEndurance).toHaveBeenCalledTimes(1)
    })
  })
})
