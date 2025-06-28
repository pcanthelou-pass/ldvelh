import { render, screen, userEvent } from '@testing-library/react-native'
import { DieSceneView } from '../components/DieSceneView'

describe('DieSceneView', () => {
  it('should render correctly with given props', () => {
    const title = 'Game Over'
    const text = 'You have died.'

    render(
      <DieSceneView title={title} onPress={() => {}}>
        {text}
      </DieSceneView>,
    )

    expect(screen.getByText(title)).toBeTruthy()
    expect(screen.getByText(text)).toBeTruthy()
  })
  it('should call onPress when button is pressed', async () => {
    const user = userEvent.setup()
    const title = 'Game Over'
    const text = 'You have died.'
    const mockOnPress = jest.fn()

    render(
      <DieSceneView title={title} onPress={mockOnPress}>
        {text}
      </DieSceneView>,
    )

    const button = screen.getByText('Quitter')
    await user.press(button)

    expect(mockOnPress).toHaveBeenCalledTimes(1)
  })
})
