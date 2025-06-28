import { render } from '@testing-library/react-native'
import ChooseStoryLoadingView from '../components/ChooseSimpleStoryLoadingView'

describe('ChooseStoryLoadingView', () => {
  it('affiche le titre et le texte de chargement', () => {
    const { getByText } = render(<ChooseStoryLoadingView />)
    expect(getByText(/Chargement de sa description/i)).toBeVisible()
  })
})
