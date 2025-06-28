import { render } from '@testing-library/react-native'
import { BackpackFilledView } from '../components/BackpackFilledView'

describe('BackpackFilledView', () => {
  it('Affiche tous les items du sac', () => {
    const items = [
      { key: 'potion', count: 2 },
      { key: 'épée', count: 1 },
    ]

    const { getByText } = render(<BackpackFilledView items={items} />)

    expect(getByText('potion x2')).toBeTruthy()
    expect(getByText('épée x1')).toBeTruthy()
  })
})
