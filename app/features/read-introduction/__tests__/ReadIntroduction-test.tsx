import { ReadIntroduction } from '@features'
import { TEST_BOOK, WrapperTestExt } from '@shared'
import { render, screen, userEvent } from '@testing-library/react-native'

describe('Given the user has selected a book and has a character', () => {
  const forward = jest.fn()

  beforeEach(() => {
    render(<ReadIntroduction forward={forward} />, {
      wrapper: WrapperTestExt,
    })
  })

  describe('When displaying the ReadIntroduction screen', () => {
    it('Then it show the title of the book "Première aventure"', async () => {
      expect(
        await screen.findByText(TEST_BOOK.introduction.title),
      ).toBeVisible()
    })
    it('Then it show the text of the introduction', async () => {
      expect(await screen.findByText(TEST_BOOK.introduction.text)).toBeVisible()
    })
    it('Then it show the button to go forward', async () => {
      expect(
        await screen.findByText(/Et maintenant, tournez la page !/i),
      ).toBeVisible()
    })
  })

  describe('When pressing "Et maintenant, tournez la page !"', () => {
    it('Then the reader may be able to go to the first scene', async () => {
      const user = userEvent.setup()
      await user.press(screen.getByText(/Et maintenant, tournez la page !/i))
      expect(forward).toHaveBeenCalledTimes(1)
    })
  })
})
