import { render, screen, userEvent } from '@testing-library/react-native'
import { ReadIntroductionView } from '../components/ReadIntroductionView'

describe('Given the ReadIntroductionView component', () => {
  it('When rendered Then it shows is props title, text', () => {
    const title = 'Scene Title'
    const text = 'Scene text'
    render(<ReadIntroductionView title={title}>{text}</ReadIntroductionView>)

    expect(screen.getByText(title)).toBeVisible()
    expect(screen.getByText(text)).toBeVisible()
  })

  it('should call forward action', async () => {
    const user = userEvent.setup()
    const title = 'Scene Title'
    const text = 'Scene text'
    const forward = jest.fn()
    render(
      <ReadIntroductionView title={title} forward={forward}>
        {text}
      </ReadIntroductionView>,
    )
    const button = screen.getByText(/Et maintenant, tournez la page !/i)
    await user.press(button)
    expect(forward).toHaveBeenCalledTimes(1)
  })
})
