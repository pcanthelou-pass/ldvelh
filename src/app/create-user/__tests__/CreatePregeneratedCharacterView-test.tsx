import { render, screen } from '@testing-library/react-native'
import { CreatePregeneratedCharacterView } from '../components/CreatePregeneratedCharacterView'

describe('CreatePregeneratedCharacterView', () => {
  it('should render the component', () => {
    render(
      <CreatePregeneratedCharacterView
        name={'Un héro'}
        agility={1}
        endurance={2}
        chance={3}
      />,
    )
    expect(screen.getByText('Un héro')).toBeVisible()
    expect(screen.getByText('Endurance : 2')).toBeVisible()
  })
})
