import { render } from '@testing-library/react-native'
import { BackpackEmptyView } from '../components/BackpackEmptyView'

describe('BackpackEmptyView', () => {
  it('Affiche le texte sac à dos vide', () => {
    const { getByText } = render(<BackpackEmptyView />)
    expect(getByText('Sac à dos vide')).toBeTruthy()
  })
})
