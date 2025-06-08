import { render, screen } from '@testing-library/react-native'
import { FleeView } from '../components/FleeView'

describe('<FleeView />', () => {
  it('should render correctly', () => {
    render(<FleeView name="Héro" endurance={16} onPressNext={() => {}} />)

    expect(screen.getByText('Fuite')).toBeTruthy()
    expect(screen.getByText('Héro a réussi à fuir !')).toBeTruthy()
    expect(screen.getByText('Vous avez perdu 2 points de vie.')).toBeTruthy()
    expect(screen.getByText('Endurance restante : 16')).toBeTruthy()
  })
})
