import { WrapperTest } from '@helpers/WrapperTest'
import { render, screen, waitFor } from '@testing-library/react-native'
import ChooseStory from '../choose-story'

// Mocks
const mockRoute = jest.fn()
// jest.mock('@core', () => ({
//   ...jest.requireActual('@core'),
//   getStory: jest.fn(),
//   useGetStoriesToChoose: () => ({
//     loading: false,
//     books: [{ name: 'Livre 1', text: 'Desc', reference: 0 }],
//     load: jest.fn(),
//     selectBook: mockSelectBook,
//   }),
// }))
jest.mock('@navigation', () => ({
  useGoToCreateUser: () => mockRoute,
}))

describe('<ChooseStory>', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('render properly', async () => {
    render(<ChooseStory />, { wrapper: WrapperTest })
    await waitFor(
      () =>
        expect(
          screen.getByText('Les mésaventures de Grok, gobelin maladroit'),
        ).toBeVisible(),
      { timeout: 10000 },
    )
  })
  // it('appelle selectBook, setBook et route lors de la sélection', async () => {
  //   mockSelectBook.mockResolvedValueOnce({ id: 42, title: 'Livre 1' })
  //   render(<ChooseStory />)
  //   const user = userEvent.setup()
  //   await user.press(screen.getByText('Livre 1'))
  //   await waitFor(() => {
  //     expect(mockSelectBook).toHaveBeenCalledWith(0)
  //     expect(mockSetBook).toHaveBeenCalledWith({ id: 42, title: 'Livre 1' })
  //     expect(mockRoute).toHaveBeenCalled()
  //   })
  // })

  // it('n’appelle pas setBook si selectBook retourne undefined', async () => {
  //   mockSelectBook.mockResolvedValueOnce(undefined)
  //   render(<ChooseStory />)
  //   const user = userEvent.setup()
  //   await user.press(screen.getByText('Livre 1'))
  //   await waitFor(() => {
  //     expect(mockSelectBook).toHaveBeenCalledWith(0)
  //     expect(mockSetBook).not.toHaveBeenCalled()
  //     expect(mockRoute).toHaveBeenCalled()
  //   })
  // })
})
