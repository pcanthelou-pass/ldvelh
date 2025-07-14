import { render, screen, userEvent } from '@testing-library/react-native'
import ChooseSimpleStory from '../choose-simple-story'

// Mocks du hook métier
const mockSetBook = jest.fn()
const mockGetSelectedBook = jest.fn(() => ({
  title: 'Livre Test',
  description: 'Une aventure incroyable',
  introduction: { title: 'i', text: 't' },
}))
jest.mock('@hooks', () => ({
  useChooseSimpleStory: () => ({
    title: 'Livre Test',
    description: 'Une aventure incroyable',
    getSelectedBook: mockGetSelectedBook,
    setBook: mockSetBook,
  }),
}))

// Mock de la navigation
const mockRoute = jest.fn()
jest.mock('@navigation', () => ({
  useGoToCreateUser: () => mockRoute,
}))

describe('ChooseSimpleStory', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('affiche le titre et la description', () => {
    render(<ChooseSimpleStory />)
    expect(screen.getByText('Livre Test')).toBeTruthy()
    expect(screen.getByText('Une aventure incroyable')).toBeTruthy()
  })

  it('appelle setBook et route au clic sur le bouton', async () => {
    render(<ChooseSimpleStory />)
    const user = userEvent.setup()
    await user.press(screen.getByRole('button'))
    expect(mockGetSelectedBook).toHaveBeenCalled()
    expect(mockSetBook).toHaveBeenCalledWith({
      id: 'TEST_BOOK',
      intro: { title: 'i', text: 't' },
    })
    expect(mockRoute).toHaveBeenCalled()
  })

  it("n'appelle pas setBook ni route si getSelectedBook retourne undefined", async () => {
    mockGetSelectedBook.mockReturnValueOnce(undefined)
    render(<ChooseSimpleStory />)
    const user = userEvent.setup()
    await user.press(screen.getByRole('button'))
    expect(mockSetBook).not.toHaveBeenCalled()
    expect(mockRoute).not.toHaveBeenCalled()
  })
})
