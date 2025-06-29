import { TEST_BOOK } from '@helpers/TEST_BOOK'
import { WrapperTestExt } from '@helpers/WrapperTestExt'
import { render, screen } from '@testing-library/react-native'
import ReadIntroduction from '../ReadIntroduction'

describe('Given the user has selected a book and has a character', () => {
  beforeEach(() => {
    render(<ReadIntroduction />, {
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
})
