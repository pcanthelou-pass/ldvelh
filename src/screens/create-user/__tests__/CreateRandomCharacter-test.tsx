import { render, screen, userEvent } from '@testing-library/react-native'
import CreateRandomCharacter from '../CreateRandomCharacter'

// Mock du hook métier
jest.mock('@hooks', () => ({
  useRandomCharacter: () => ({
    name: 'Aventurier',
    agility: 4,
    endurance: 12,
    chance: 2,
    items: [
      { key: 'torche', quantity: 1 },
      { key: 'potion', quantity: 3 },
    ],
  }),
}))

// Mock de la navigation
const mockRoute = jest.fn()
jest.mock('@navigation', () => ({
  useGoToReadIntroduction: () => mockRoute,
}))

describe('CreateRandomCharacter', () => {
  it('affiche les infos du personnage et le sac', () => {
    render(<CreateRandomCharacter />)
    expect(screen.getByText('Aventurier')).toBeTruthy()
    expect(screen.getByText('torche x1')).toBeTruthy()
    expect(screen.getByText('potion x3')).toBeTruthy()
    expect(screen.getByText('Suivant')).toBeTruthy()
  })

  it('navigue à la page suivante au clic sur "Suivant"', async () => {
    const user = userEvent.setup()
    render(<CreateRandomCharacter />)
    await user.press(screen.getByText('Suivant'))
    expect(mockRoute).toHaveBeenCalled()
  })
})
