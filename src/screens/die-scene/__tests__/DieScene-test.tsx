import { render, screen, userEvent } from '@testing-library/react-native'
import DieScene from '../die-scene'

// Mock du hook de navigation
const mockHome = jest.fn()
jest.mock('@navigation', () => ({
  useGoToChooseStory: () => mockHome,
}))

// Mock du hook métier
jest.mock('../../../core/hooks/useDieScene', () => ({
  useDieScene: () => ({
    title: 'Vous êtes mort',
    text: "Fin de l'aventure.",
  }),
}))

describe('DieScene (container)', () => {
  it('Affiche le titre, le texte et gère le bouton retour', async () => {
    const user = userEvent.setup()
    render(<DieScene />)
    expect(screen.getByText('Vous êtes mort')).toBeTruthy()
    expect(screen.getByText("Fin de l'aventure.")).toBeTruthy()

    await user.press(screen.getByRole('button'))

    expect(mockHome).toHaveBeenCalledTimes(1)
  })
})
