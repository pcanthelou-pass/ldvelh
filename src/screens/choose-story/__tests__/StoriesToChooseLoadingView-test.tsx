import { render, screen } from '@testing-library/react-native'
import { StoriesToChooseLoadingView } from '../components/StoriesToChooseLoadingView'

describe('<StoriesToChooseLoadingView></StoriesToChooseLoadingView>', () => {
  it('should display the text chargement', () => {
    render(<StoriesToChooseLoadingView />)

    expect(screen.getByText('Chargement...')).toBeVisible()
  })
})
