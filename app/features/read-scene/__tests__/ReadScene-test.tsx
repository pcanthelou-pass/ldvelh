import { GameSlice } from '@core'
import { ReadScene, WrapperTestExt } from '@features'
import { TEST_BOOK } from '@shared/helpers/TEST_BOOK'
import { render, screen, userEvent } from '@testing-library/react-native'
import { ReactNode } from 'react'

const MyWrapper = ({ children }: { children: ReactNode }) => {
  const runOnStart = (store: GameSlice) => {
    store.startBook()
    store.hitCharacter(3)
  }
  return <WrapperTestExt runOnStart={runOnStart}>{children}</WrapperTestExt>
}

describe('Given the user has selected a book and has a character', () => {
  const user = userEvent.setup()
  const onPressActionExtFn = jest.fn()
  const onPressItemExtFn = jest.fn()

  beforeEach(() => {
    render(
      <ReadScene
        onPressActionExt={onPressActionExtFn}
        onPressItemExt={onPressItemExtFn}
      />,
      {
        wrapper: MyWrapper,
      },
    )
  })

  describe('When displaying the ReadScene screen for the first time', () => {
    it('Then it show the text for the first scene', async () => {
      expect(await screen.findByText(TEST_BOOK.scenes['1']?.text)).toBeVisible()
    })
    it('Then it show the choices for the next scenes', async () => {
      expect(
        await screen.findByText(TEST_BOOK.scenes['1'].next['1-1'].question),
      ).toBeVisible()
      expect(
        await screen.findByText(TEST_BOOK.scenes['1'].next['1-2'].question),
      ).toBeVisible()
    })
    it('Allows to push button to change current scene', async () => {
      const button = screen.getByTestId('Choice1-1')
      expect(button).toBeVisible()

      await user.press(button)

      expect(onPressActionExtFn).toHaveBeenCalledWith('1-1')
    })
    it('Then it show the choice to use a potion item', async () => {
      expect(
        await screen.findByText(/boire la potion d'endurance/i),
      ).toBeVisible()
    })
    it('Allows to push button to use an item', async () => {
      const button = screen.getByText(/boire la potion d'endurance/i)
      expect(button).toBeVisible()

      await user.press(button)

      expect(onPressItemExtFn).toHaveBeenCalledTimes(1)
    })
    it('A used item without quatity is not usable again and disappear', async () => {
      const button = screen.getByText(/boire la potion d'endurance/i)
      await user.press(button)
      expect(
        await screen.queryByText(/boire la potion d'endurance/i),
      ).not.toBeVisible()
    })
  })
})
