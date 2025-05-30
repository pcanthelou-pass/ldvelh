import { GameSlice } from '@core'
import { WrapperTestExt } from '@shared'
import { render, screen, userEvent } from '@testing-library/react-native'
import { ReactNode } from 'react'
import { ReadScene } from '../ReadScene'

const MyWrapper = ({ children }: { children: ReactNode }) => {
  const runOnStart = (store: GameSlice) => {
    store.startBook()
    store.moveToScene('1-3')
  }
  return <WrapperTestExt runOnStart={runOnStart}>{children}</WrapperTestExt>
}

describe('Given a book and a hero, When landing on a scene with <fight>', () => {
  const user = userEvent.setup()
  let onPressActionExtFn = jest.fn()
  let onPressItemExtFn = jest.fn()
  let onPressQuitExtFn = jest.fn()
  let onPressFightExtFn = jest.fn()

  beforeEach(() => {
    onPressActionExtFn = jest.fn()
    onPressItemExtFn = jest.fn()
    onPressQuitExtFn = jest.fn()
    onPressFightExtFn = jest.fn()
    render(
      <ReadScene
        onPressActionExt={onPressActionExtFn}
        onPressItemExt={onPressItemExtFn}
        onPressQuitExt={onPressQuitExtFn}
        onPressFightExt={onPressFightExtFn}
      />,
      {
        wrapper: MyWrapper,
      },
    )
  })
  it('Then there is just one button named "Combattre"', async () => {
    expect(
      await screen.queryByText('Texte de la scène après le combat'),
    ).toBeVisible()
    expect(await screen.queryByText('Scène #2-1')).not.toBeVisible()
    expect(await screen.findByText('Combattre')).toBeVisible()
  })
  it('Then pressing button named "Combattre" is an action with a proxy', async () => {
    await user.press(await screen.findByText('Combattre'))
    expect(onPressFightExtFn).toHaveBeenCalledTimes(1)
  })
  it('Then pressing button named "Combattre" is an action landing to a fight scene', async () => {
    await user.press(await screen.findByText('Combattre'))
    expect(await screen.findByText('Combat')).toBeVisible()
  })
  describe('Given the hero land in a fight scene with enough hit points', () => {
    it('Then there is a text displayed', async () => {
      await user.press(await screen.findByText('Combattre'))
      expect(await screen.findByText('Vous devez battre Toto')).toBeVisible()
    })
    it('Then there is an opponent view with opponent properties', async () => {
      await user.press(await screen.findByText('Combattre'))
      expect(
        await screen.findByText('Monster - Agilité : 8 - Endurance : 8'),
      ).toBeVisible()
    })
    it('Then there is a hero view with hero properties', async () => {
      await user.press(await screen.findByText('Combattre'))
      expect(
        await screen.findByText('Héro - Agilité : 8 - Endurance : 18'),
      ).toBeVisible()
    })
    it('Then there is a "Attaquer" button', async () => {
      await user.press(await screen.findByText('Combattre'))
      expect(await screen.findByText('Attaquer')).toBeVisible()
    })
    it('When the opponent loose an attack Then it display Endurance - 2', async () => {
      await user.press(await screen.findByText('Combattre'))
      await user.press(await screen.findByText('Attaquer'))
      expect(
        await screen.findByText('Monster - Agilité : 8 - Endurance : 6'),
      ).toBeVisible()
    })
    it('When the hero loose an attack Then it display Endurance - 2', async () => {
      await user.press(await screen.findByText('Combattre'))
      await user.press(await screen.findByText('Attaquer'))
      expect(
        await screen.findByText('Héro - Agilité : 8 - Endurance : 16'),
      ).toBeVisible()
    })
    it('Then there is a "Fuir" button', async () => {
      await user.press(await screen.findByText('Combattre'))
      expect(await screen.findByText('Fuir')).toBeVisible()
    })
  })
  describe('Given the hero land in a fight scene with an opponent with 0 hit points', () => {
    it('Then it display a button "Vous avez vaincu votre adversaire"', () => {})
    it('When pressing the button "Vous avez vaincu votre adversaire" it show the scene', () => {})
  })
  describe('Given the hero land in a fight scene with 0 hit points', () => {
    it('Then it display a button "Vous avez perdu ce combat"', () => {})
    it('When pressing the button "Vous avez perdu ce combat" it show the scene "Vous êtes mort"', () => {})
  })
})
