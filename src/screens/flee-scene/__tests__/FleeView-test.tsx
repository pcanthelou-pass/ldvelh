import { render, screen } from '@testing-library/react-native'
import { FleeView } from '../components/FleeView'

describe('<FleeView />', () => {
  it('should render correctly', () => {
    render(<FleeView name="Héro" endurance={16} onPressNext={() => {}} />)

    expect(screen.getByText('Héro a réussi à fuir !')).toBeTruthy()
    expect(screen.getByText('Vous avez perdu 2 points de vie.')).toBeTruthy()
    expect(screen.getByText('endurance restante')).toBeTruthy()
    expect(screen.getByText('16')).toBeTruthy()
  })
})
