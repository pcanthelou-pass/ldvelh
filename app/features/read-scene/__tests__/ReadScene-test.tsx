import { GameState } from '@core'
import { GAME_STORE } from '@core/hooks/useGameStore'
import { TEST_BOOK, WrapperTestExt } from '@shared'
import { act, render, screen, userEvent } from '@testing-library/react-native'
import { ReadScene } from '../ReadScene'

describe('Given the user has selected a book and has a character', () => {
  const user = userEvent.setup()
  let onPressActionExtFn = jest.fn()
  let onPressItemExtFn = jest.fn()
  let onPressQuitExtFn = jest.fn()

  beforeEach(() => {
    onPressActionExtFn = jest.fn()
    onPressItemExtFn = jest.fn()
    onPressQuitExtFn = jest.fn()

    const runOnStart = (store: GameState) => {
      store.startBook()
      store.hitCharacter(4)
    }

    render(
      <WrapperTestExt runOnStart={runOnStart}>
        <ReadScene
          onPressActionExt={onPressActionExtFn}
          onPressItemExt={onPressItemExtFn}
          onPressQuitExt={onPressQuitExtFn}
        />
      </WrapperTestExt>,
    )
  })

  describe('When displaying the ReadScene screen for the first time', () => {
    it('Then it show the text for the first scene', async () => {
      expect(await screen.findByText(TEST_BOOK.scenes['1']?.text)).toBeVisible()
    })
    it('Then it show the choices for the next scenes', async () => {
      expect(
        await screen.findByText(TEST_BOOK.scenes['1-1'].question),
      ).toBeVisible()
      expect(
        await screen.findByText(TEST_BOOK.scenes['1-2'].question),
      ).toBeVisible()
    })
    it('Allows to push button to change current scene', async () => {
      const button = screen.getByTestId('Choice0')
      expect(button).toBeVisible()

      await user.press(button)

      act(() => {})

      expect(onPressActionExtFn).toHaveBeenCalledWith('1-1')

      expect(screen.getByText('Texte de la scène #1 1')).toBeVisible()
    })
    it('Then it show the choice to use a potion item', async () => {
      expect(
        await screen.findByText(/boire la potion d'endurance/i),
      ).toBeVisible()
    })
    it('Allows to push button to use an item and this item apply effects', async () => {
      expect(GAME_STORE.getState().character.abilities.endurance).toBe(
        GAME_STORE.getState().characterNotModified.abilities.endurance - 4,
      )

      const button = screen.getByText(/boire la potion d'endurance/i)
      expect(button).toBeVisible()

      await user.press(button)

      expect(onPressItemExtFn).toHaveBeenCalledTimes(1)

      expect(GAME_STORE.getState().character.abilities.endurance).toBe(
        GAME_STORE.getState().characterNotModified.abilities.endurance,
      )
    })
    it('A used item without quantity is not usable again and disappear', async () => {
      await user.press(screen.getByText(/boire la potion d'endurance/i))
      expect(
        await screen.queryByText(/boire la potion d'endurance/i),
      ).toBeVisible()
      await user.press(screen.getByText(/boire la potion d'endurance/i))
      expect(
        await screen.queryByText(/boire la potion d'endurance/i),
      ).not.toBeVisible()
    })
  })
  describe('When displaying an successful ending scene', () => {
    beforeEach(async () => {
      let button = screen.getByTestId('Choice0')
      await user.press(button)
      act(() => {})
      button = screen.getByTestId('Choice0')
      await user.press(button)
      act(() => {})
      button = screen.getByTestId('Choice0')
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
      let button = screen.getByTestId('Choice1')
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
