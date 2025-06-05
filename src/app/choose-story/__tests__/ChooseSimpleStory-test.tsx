import { WrapperTest } from '@shared'
import {
  render,
  screen,
  userEvent,
  waitFor,
} from '@testing-library/react-native'
import ChooseSimpleStory from '..'

describe('<ChooseStory></ChooseStory>', () => {
  it('Should display the only book', async () => {
    render(<ChooseSimpleStory />, { wrapper: WrapperTest })

    expect(screen.getByText(/Mon livre description/i)).toBeVisible()
  })

  it('Should not display the only book as selected', async () => {
    render(<ChooseSimpleStory />, { wrapper: WrapperTest })

    expect(await screen.findByText('Entrer')).toBeVisible()
  })

  it('should update the game state when pressing enter', async () => {
    const user = userEvent.setup()

    render(<ChooseSimpleStory />, { wrapper: WrapperTest })

    expect(screen.getByText('Entrer')).toBeVisible()

    await user.press(screen.getByText('Entrer'))

    await waitFor(() => {
      expect(screen.queryByText(/appuyer sur entrer/i)).not.toBeOnTheScreen()
    })
  })
})
