import { render, screen, userEvent } from '@testing-library/react-native'
import { CreatePregeneratedCharacter } from '../CreatePregeneratedCharacter'

// Mock du hook métier
jest.mock('@hooks', () => ({
  usePregeneratedCharacter: () => ({
    name: 'Héro',
    agility: 5,
    endurance: 10,
    chance: 3,
    items: [
      { key: 'potion', quantity: 2 },
      { key: 'épée', quantity: 1 },
    ],
  }),
}))

// Mock de la navigation
const mockRoute = jest.fn()
jest.mock('@navigation', () => ({
  useGoToReadIntroduction: () => mockRoute,
}))

describe('CreatePregeneratedCharacter', () => {
  it('affiche les infos du personnage et le sac', () => {
    render(<CreatePregeneratedCharacter />)
    expect(screen.getByText('Héro')).toBeTruthy()
    expect(screen.getByText(/5/)).toBeTruthy()
    expect(screen.getByText(/10/)).toBeTruthy()
    expect(screen.getByText(/3/)).toBeTruthy()
    expect(screen.getByText('potion x2')).toBeTruthy()
    expect(screen.getByText('épée x1')).toBeTruthy()
  })

  it('navigue à la page suivante au clic sur "Suivant"', async () => {
    const user = userEvent.setup()
    render(<CreatePregeneratedCharacter />)
    await user.press(screen.getByText('Suivant'))
    expect(mockRoute).toHaveBeenCalled()
  })
})
