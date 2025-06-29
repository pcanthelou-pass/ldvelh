import { TEST_BOOK } from '@helpers/TEST_BOOK'
import { TEST_HERO } from '@helpers/TEST_HERO'
import { act, renderHook } from '@testing-library/react-native'
import { EmptyBook, EmptyCharacter, EmptyScene } from '@types'
import { useStore } from 'zustand'
import { createGameStore } from '../game'

describe('Game (store)', () => {
  const store = createGameStore()

  it('should be the default game', () => {
    const state = store.getState()
    expect(state).toHaveProperty('gameBook', EmptyBook)
    expect(state).toHaveProperty('history', [])
    expect(state).toHaveProperty('currentScene', { ...EmptyScene, actions: [] })
    expect(state).toHaveProperty('date', '')
    expect(state).toHaveProperty('character')
    expect(state).toHaveProperty('characterNotModified')
  })

  it('should change the date', async () => {
    const { result } = renderHook(() =>
      useStore(store, (state) => state.setDate),
    )
    await act(() => result.current('11/11/25'))

    expect(store.getState()).toHaveProperty('date', '11/11/25')
  })

  it('should change the book', () => {
    const { result } = renderHook(() =>
      useStore(store, (state) => state.setBook),
    )
    act(() => result.current(TEST_BOOK))

    expect(store.getState()).toHaveProperty('gameBook', TEST_BOOK)
    expect(store.getState().gameBook).not.toBe(EmptyBook)
  })

  it('should change the character', () => {
    const { result } = renderHook(() =>
      useStore(store, (state) => state.setCharacter),
    )
    act(() => result.current(TEST_HERO))

    expect(store.getState()).toHaveProperty('character')
    expect(store.getState().characterNotModified).not.toBe(EmptyCharacter)
    expect(store.getState().characterNotModified).toStrictEqual(
      store.getState().character,
    )
  })

  it('should start the reading and being on scene 1', () => {
    const { result } = renderHook(() => useStore(store, (state) => state))
    const { startBook, setBook } = result.current
    act(() => {
      setBook(TEST_BOOK)
      startBook()
    })

    expect(store.getState()).toHaveProperty('history', [])
    expect(store.getState()).toHaveProperty('currentScene')
    expect(store.getState().currentScene).toHaveProperty('actions', [
      { dest: '1-1', label: 'Scène #1-1' },
      { dest: '1-2', label: 'Scène #1-2' },
      { dest: '1-3', label: 'Scène #1-3' },
    ])
  })

  it('should be able to go from scene 1 to scene 1-2', () => {
    const { result } = renderHook(() => useStore(store, (state) => state))
    const { startBook, setBook, moveToScene } = result.current
    act(() => {
      setBook(TEST_BOOK)
      startBook()
      moveToScene('1-1')
    })

    expect(store.getState()).toHaveProperty('history', ['1'])
    expect(store.getState().currentScene).toHaveProperty('id', '1-1')
    expect(store.getState().currentScene).toHaveProperty('actions', [
      { dest: '2-1', label: 'Scène #2-1' },
      { dest: '2-2', label: 'Scène #2-2' },
    ])
  })

  it('should be able to go quit game after reading', () => {
    const { result } = renderHook(() => useStore(store, (state) => state))
    const { startBook, setBook, moveToScene, quitGame } = result.current
    act(() => {
      setBook(TEST_BOOK)
      startBook()
      moveToScene('1-1')
      moveToScene('2-2')
    })

    expect(store.getState()).toHaveProperty('history', ['1', '1-1'])
    expect(store.getState().currentScene).toHaveProperty('id', '2-2')
    expect(store.getState().currentScene).toHaveProperty('actions', [])
    expect(store.getState().currentScene).toHaveProperty('isEnding', true)
    expect(store.getState().currentScene).toHaveProperty(
      'endingType',
      'failure',
    )

    act(() => {
      quitGame()
    })

    const state = store.getState()
    expect(state).toHaveProperty('gameBook', EmptyBook)
    expect(state).toHaveProperty('history', [])
    expect(state).toHaveProperty('currentScene', { ...EmptyScene, actions: [] })
    expect(state).toHaveProperty('date', '')
    expect(state).toHaveProperty('character')
    expect(state).toHaveProperty('characterNotModified')
  })

  it('should be able to hit a character and reset his endurance', () => {
    const { result } = renderHook(() => useStore(store, (state) => state))
    const {
      setCharacter,
      startBook,
      setBook,
      moveToScene,
      hitCharacter,
      resetEndurance,
    } = result.current
    act(() => {
      setBook(TEST_BOOK)
      setCharacter(TEST_HERO)
      startBook()
      moveToScene('1-3')
      hitCharacter()
    })

    expect(store.getState().character.abilities.endurance).toBe(
      store.getState().characterNotModified.abilities.endurance - 2,
    )

    act(() => {
      resetEndurance()
    })

    expect(store.getState().character.abilities.endurance).toBe(
      store.getState().characterNotModified.abilities.endurance,
    )
  })

  it('Should be able to hit an opponent', () => {
    const { result } = renderHook(() => useStore(store, (state) => state))
    const { setCharacter, startBook, setBook, moveToScene, hitOpponent } =
      result.current
    act(() => {
      setBook(TEST_BOOK)
      setCharacter(TEST_HERO)
      startBook()
      moveToScene('1-3')
      hitOpponent()
    })
    expect(store.getState().currentScene.opponent.abilities.endurance).toBe(6)
  })

  it('Should decrease hero chance by one when asked to', () => {
    const { result } = renderHook(() => useStore(store, (state) => state))
    const { setCharacter, decreaseChance, setBook } = result.current
    act(() => {
      setBook(TEST_BOOK)
      setCharacter(TEST_HERO)
      decreaseChance()
    })
    expect(store.getState().character.abilities.chance).toBe(
      store.getState().characterNotModified.abilities.chance - 1,
    )
  })

  it('should be able to consume a potion', () => {
    const { result } = renderHook(() => useStore(store, (state) => state))
    const { setCharacter, startBook, setBook, moveToScene, consumeItemByOne } =
      result.current
    act(() => {
      setBook(TEST_BOOK)
      setCharacter(TEST_HERO)
      startBook()
      moveToScene('1-3')
    })

    expect(store.getState().character.items[0].quantity).toBe(2)

    act(() => consumeItemByOne("Potion d'endurance"))
    expect(store.getState().character.items[0].quantity).toBe(1)
  })
})
