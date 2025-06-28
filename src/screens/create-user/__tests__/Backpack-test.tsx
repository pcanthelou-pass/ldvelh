import { render } from '@testing-library/react-native'
import { BackpackItems } from '@types'
import { Backpack, useBackpackToDisplay } from '../Backpack'

describe('useBackpackToDisplay', () => {
  it("transforme les items en tableau d'affichage", () => {
    const items = [
      { key: 'potion', quantity: 2 },
      { key: 'épée', quantity: 1 },
    ] as BackpackItems
    const result = useBackpackToDisplay(items)
    expect(result).toEqual([
      { key: 'potion', count: 2 },
      { key: 'épée', count: 1 },
    ])
  })
})

describe('Backpack', () => {
  it('affiche BackpackEmptyView si le sac est vide', () => {
    const { getByText } = render(<Backpack items={[]} />)
    expect(getByText('Sac à dos vide')).toBeTruthy()
  })

  it('affiche BackpackFilledView si le sac contient des items', () => {
    const items = [
      { key: 'potion', quantity: 2 },
      { key: 'épée', quantity: 1 },
    ] as BackpackItems
    const { getByText } = render(<Backpack items={items} />)
    expect(getByText('potion x2')).toBeTruthy()
    expect(getByText('épée x1')).toBeTruthy()
  })
})
