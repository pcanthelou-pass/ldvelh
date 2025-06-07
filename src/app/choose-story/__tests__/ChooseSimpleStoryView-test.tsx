import { render, screen, userEvent } from '@testing-library/react-native'
import ChooseStoryView from '../components/ChooseSimpleStoryView'

describe('<ChooseStoryView></ChooseStoryView>', () => {
  it('should have a button Entrer to go to the next step', async () => {
    const user = userEvent.setup()
    const onPressFn = jest.fn()

    render(
      <ChooseStoryView
        title="title"
        description="description"
        onPress={onPressFn}
      />,
    )

    expect(screen.getByText(/title/i)).toBeVisible()
    expect(screen.getByText(/description/i)).toBeVisible()
    expect(screen.getByText(/entrer/i)).toBeVisible()
    await user.press(screen.getByText(/entrer/i))
    expect(onPressFn).toHaveBeenCalledTimes(1)
  })
})
