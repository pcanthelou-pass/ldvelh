import { WrapperTest } from '@features'
import { render, screen, userEvent } from '@testing-library/react-native'

describe('Given the user has selected a book and has a character', () => {
  describe('When displaying the ReadIntroduction screen', () => {
    it('Then it show the title of the book "Première aventure"', async () => {
      render(<ReadIntroduction />, { wrapper: WrapperTest })

      expect(await screen.findByText(/première aventure/i)).toBeVisible()
    })
    it('Then it show the text of the introduction', async () => {
      render(<ReadIntroduction />, { wrapper: WrapperTest })

      expect(await screen.findByText(/lorem ipsum/i)).toBeVisible()
    })
    it('Then it show the button to go forward', async () => {
      render(<ReadIntroduction />, { wrapper: WrapperTest })
      expect(
        await screen.findByText(/Et maintenant, tournez la page !/i),
      ).toBeVisible()
    })
  })

  describe('When pressing "Et maintenant, tournez la page !"', () => {
    it('Then the reader may be able to go to the first scene', async () => {
      const user = userEvent.setup()
      const forward = jest.fn()
      render(<ReadIntroduction forward />, { wrapper: WrapperTest })
      await user.press(screen.getByText(/Et maintenant, tournez la page !/i))
      expect(forward).toHaveBeenCalledTimes(1)
    })
  })
})
