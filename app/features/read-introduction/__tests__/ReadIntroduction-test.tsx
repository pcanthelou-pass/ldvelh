import { useGameStore } from '@core'
import { TEST_BOOK } from '@core/__tests__/useGameStore-test'
import { ReadIntroduction, WrapperTest } from '@features'
import { render, screen, userEvent } from '@testing-library/react-native'
import { useEffect } from 'react'

const WrapperTestGameStore = ({ children }: { children: React.ReactNode }) => {
  const { setBook } = useGameStore()

  useEffect(() => {
    setBook(TEST_BOOK)
  }, [setBook])

  return children
}

const WrapperTestExt = ({ children }: { children: React.ReactNode }) => {
  return (
    <WrapperTest>
      <WrapperTestGameStore>{children}</WrapperTestGameStore>
    </WrapperTest>
  )
}

describe('Given the user has selected a book and has a character', () => {
  describe('When displaying the ReadIntroduction screen', () => {
    it('Then it show the title of the book "Première aventure"', async () => {
      const forward = jest.fn()
      render(<ReadIntroduction forward={forward} />, {
        wrapper: WrapperTestExt,
      })

      expect(
        await screen.findByText(TEST_BOOK.introduction.title),
      ).toBeVisible()
    })
    it('Then it show the text of the introduction', async () => {
      const forward = jest.fn()
      render(<ReadIntroduction forward={forward} />, {
        wrapper: WrapperTestExt,
      })

      expect(await screen.findByText(TEST_BOOK.introduction.text)).toBeVisible()
    })
    it('Then it show the button to go forward', async () => {
      const forward = jest.fn()
      render(<ReadIntroduction forward={forward} />, {
        wrapper: WrapperTestExt,
      })
      expect(
        await screen.findByText(/Et maintenant, tournez la page !/i),
      ).toBeVisible()
    })
  })

  describe('When pressing "Et maintenant, tournez la page !"', () => {
    it('Then the reader may be able to go to the first scene', async () => {
      const user = userEvent.setup()
      const forward = jest.fn()
      render(<ReadIntroduction forward={forward} />, {
        wrapper: WrapperTestExt,
      })
      await user.press(screen.getByText(/Et maintenant, tournez la page !/i))
      expect(forward).toHaveBeenCalledTimes(1)
    })
  })
})
