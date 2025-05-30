import { GameSlice } from '@core'
import { TEST_BOOK, WrapperTestExt } from '@shared'
import { act, render, screen, userEvent } from '@testing-library/react-native'
import { ReactNode } from 'react'
import { ReadScene } from '../ReadScene'

const MyWrapper = ({ children }: { children: ReactNode }) => {
  const runOnStart = (store: GameSlice) => {
    store.startBook()
    store.hitCharacter(3)
  }
  return <WrapperTestExt runOnStart={runOnStart}>{children}</WrapperTestExt>
}

describe('Given the user has selected a book and has a character', () => {
  const user = userEvent.setup()
  let onPressActionExtFn = jest.fn()
  let onPressItemExtFn = jest.fn()
  let onPressQuitExtFn = jest.fn()

  beforeEach(() => {
    onPressActionExtFn = jest.fn()
    onPressItemExtFn = jest.fn()
    onPressQuitExtFn = jest.fn()
    render(
      <ReadScene
        onPressActionExt={onPressActionExtFn}
        onPressItemExt={onPressItemExtFn}
        onPressQuitExt={onPressQuitExtFn}
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
        //nextIds
        await screen.findByText(TEST_BOOK.scenes['1-1'].question),
      ).toBeVisible()
      expect(
        await screen.findByText(TEST_BOOK.scenes['1-2'].question),
      ).toBeVisible()
    })
    it('Allows to push button to change current scene', async () => {
      const button = screen.getByTestId('Choice1-1')
      expect(button).toBeVisible()

      await user.press(button)

      act(() => {})

      expect(onPressActionExtFn).toHaveBeenCalledWith('1-1')

      // expect(screen.getByText('Texte de la scène #1 1')).toBeVisible()
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
  describe('When displaying an successful ending scene', () => {
    beforeEach(async () => {
      let button = screen.getByTestId('Choice1-1')
      await user.press(button)
      act(() => {})
      button = screen.getByTestId('Choice2-1')
      await user.press(button)
      act(() => {})
      button = screen.getByTestId('Choice3-1')
      await user.press(button)
      act(() => {})
    })
    it('Does not show other actions', async () => {
      expect(screen.getByText('Texte de la scène #3 1')).toBeVisible()
      expect(
        await screen.queryByText(/boire la potion d'endurance/i),
      ).not.toBeVisible()
    })
    it('Does show it is successful', () => {
      expect(screen.getByText(/vous avez réussi/i)).toBeVisible()
    })
    it('Does show a button to go the homepage', async () => {
      expect(screen.getByText('Quitter')).toBeVisible()
      await user.press(screen.getByText('Quitter'))
      expect(onPressQuitExtFn).toHaveBeenCalledTimes(1)
    })
  })
  describe('When displaying a failing ending scene', () => {
    beforeEach(async () => {
      let button = screen.getByTestId('Choice1-2')
      await user.press(button)
      act(() => {})
    })
    it('Does not show other actions', async () => {
      expect(screen.getByText('Texte de la scène #1 2')).toBeVisible()
      expect(
        await screen.queryByText(/boire la potion d'endurance/i),
      ).not.toBeVisible()
    })
    it('Does show it is a failure', () => {
      expect(screen.getByText(/vous avez échoué/i)).toBeVisible()
    })
    it('Does show a button to go the homepage', async () => {
      expect(screen.getByText('Quitter')).toBeVisible()
      await user.press(screen.getByText('Quitter'))
      expect(onPressQuitExtFn).toHaveBeenCalledTimes(1)
    })
  })
})
