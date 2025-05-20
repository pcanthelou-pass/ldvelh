import { TEST_BOOK } from '@core/__tests__/useGameStore-test'
import { WrapperTestExt } from '@features/helpers'
import { render, screen } from '@testing-library/react-native'
import { ReadScene } from '../ReadScene'

describe.skip('Given the user has selected a book and has a character', () => {
  render(<ReadScene />, {
    wrapper: WrapperTestExt,
  })
  describe('When displaying the ReadScene screen for the first time', () => {
    it('Then it show the text for the first scene', async () => {
      expect(await screen.findByText(TEST_BOOK.scenes['1'].text)).toBeVisible()
    })
    it('Then it show the choices for the next scenes', async () => {
      expect(
        await screen.findByText(TEST_BOOK.scenes['1'].next['1-1'].question),
      ).toBeVisible()
      expect(
        await screen.findByText(TEST_BOOK.scenes['1'].next['1-2'].question),
      ).toBeVisible()
    })
    it('Then it show the choice to use a potion item', async () => {
      expect(
        await screen.findByText(/boire la potion d'endurance/i),
      ).toBeVisible()
    })
  })
})
