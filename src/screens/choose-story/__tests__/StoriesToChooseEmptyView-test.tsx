import { render, screen } from '@testing-library/react-native'
import StoriesToChooseEmptyView from '../components/StoriesToChooseEmptyView'

describe('<StoriesToChooseEmptyView>', () => {
  it('should display the default text', () => {
    render(<StoriesToChooseEmptyView />)

    expect(screen.getByText('Aucun livre')).toBeVisible()
  })
})
