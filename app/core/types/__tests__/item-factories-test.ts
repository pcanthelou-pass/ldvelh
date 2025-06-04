import { ItemBuilder } from '../Item-factories'

describe('Item Factories', () => {
  it('can build a normal item', () => {
    const effect = jest.fn()
    const normal = ItemBuilder('item', {
      quantity: 1,
      value: 1,
      power: 'normal',
      effect: effect,
    })

    expect(normal).toHaveProperty('name')
    expect(normal.name).toBe('item')
    normal.action()
    expect(effect).toHaveBeenCalledTimes(1)
  })

  it('can build a unknown item if this one is unknown', () => {
    const effect = jest.fn()
    const normal = ItemBuilder('item', {
      quantity: 1,
      value: 1,
      power: 'unknown',
      effect: effect,
    })

    expect(normal).toHaveProperty('name')
    expect(normal.name).toBe('Object inconnu : item')
    normal.action()
    expect(effect).not.toHaveBeenCalledTimes(1)
  })

  it('can build a potion item', () => {
    const potion = ItemBuilder('item', {
      quantity: 1,
      value: 1,
      power: 'potion',
    })

    const store = {
      resetEndurance: jest.fn(),
      consumeItemByOne: jest.fn(),
    }

    expect(potion).toHaveProperty('name')
    expect(potion.name).toBe('Boire la item')
    potion.action(store)
    expect(store.resetEndurance).toHaveBeenCalledTimes(1)
    expect(store.consumeItemByOne).toHaveBeenCalledTimes(1)
  })
})
