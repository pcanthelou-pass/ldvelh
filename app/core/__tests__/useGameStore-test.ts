import {
  Book,
  Character,
  EmptyBook,
  EmptyCharacter,
  getSceneInfosRaw,
  useGameStore,
} from '@core'
import { TEST_BOOK, TEST_HERO, WrapperTest } from '@shared/helpers'
import { act, renderHook } from '@testing-library/react-native'

describe('useGameStore', () => {
  it('when just created, has an empty book', () => {
    const { result } = renderHook(useGameStore, { wrapper: WrapperTest })
    expect(result.current.gameBook).toBe(EmptyBook)
  })

  it('when just created, has an empty character', () => {
    const { result } = renderHook(useGameStore, { wrapper: WrapperTest })
    expect(result.current.character).toStrictEqual(EmptyCharacter)
  })

  it('when game is set, character is empty and book is filled', () => {
    const { result } = renderHook(useGameStore, { wrapper: WrapperTest })
    expect(result.current.gameBook).toBe(EmptyBook)
    expect(result.current.character).toStrictEqual(EmptyCharacter)

    act(() => {
      result.current.setBook(TEST_BOOK)
    })

    expect(result.current.gameBook).not.toStrictEqual(EmptyBook)
    expect(result.current.gameBook.title).toBe('Mon livre')
    expect(result.current.character).toBe(EmptyCharacter)
  })

  it('when game is set and character is set then there is a save of the character', () => {
    const { result } = renderHook(useGameStore, { wrapper: WrapperTest })
    act(() => {
      result.current.setBook(TEST_BOOK as unknown as Book)
      result.current.setCharacter(TEST_HERO as unknown as Character)
    })

    expect(result.current.gameBook).not.toBe(EmptyBook)
    expect(result.current.gameBook.title).toBe('Mon livre')
    expect(result.current.character).not.toBe(EmptyCharacter)
    expect(result.current.character.name).toBe('Héro')
    expect(result.current.characterNotModified).not.toBe(EmptyCharacter)
    expect(result.current.characterNotModified.name).toBe('Héro')
  })

  it('when the book is loaded it has an introduction part', () => {
    const { result } = renderHook(useGameStore, { wrapper: WrapperTest })
    act(() => {
      result.current.setBook(TEST_BOOK as unknown as Book)
    })

    expect(result.current.gameBook.introduction).toStrictEqual({
      title: TEST_BOOK.introduction.title,
      text: TEST_BOOK.introduction.text,
    })
  })

  describe('Given the book is loaded, a hero is created', () => {
    const { result } = renderHook(useGameStore, { wrapper: WrapperTest })
    act(() => {
      result.current.setBook(TEST_BOOK as unknown as Book)
      result.current.setCharacter(TEST_HERO as unknown as Character)
      result.current.startBook()
    })

    it('Then the game store is well positioned on scene 1', () => {
      expect(result.current.currentScene).toBe('1')
    })

    it('Then we are able to get first scenes infos', () => {
      const infos = getSceneInfosRaw('1', result.current.gameBook.scenes)
      expect(infos).toStrictEqual([
        { dest: '1-1', question: 'Scène #1-1' },
        { dest: '1-2', question: 'Scène #1-2' },
      ])
    })

    // it('Then we are able to move to another scenes', () => {
    //   const { result } = renderHook(useGameStore, { wrapper: WrapperTest })
    //   act(() => {
    //     result.current.startBook()
    //     result.current.moveToScene('1-1')
    //   })
    //   expect(result.current.currentScene).toBe('1-1')
    //   expect(result.current.history).toStrictEqual(['1'])
    //   const infos = getSceneInfosRaw(
    //     result.current.currentScene,
    //     result.current.gameBook.scenes,
    //   )
    //   expect(infos).toStrictEqual([
    //     { dest: '1-1', question: 'Scène #1-1' },
    //     { dest: '1-2', question: 'Scène #1-2' },
    //   ])
    // })

    it('Then the hero can be hitted', () => {
      const { result } = renderHook(useGameStore, { wrapper: WrapperTest })
      act(() => {
        result.current.setBook(TEST_BOOK as unknown as Book)
        result.current.setCharacter(TEST_HERO as unknown as Character)
        result.current.startBook()
        result.current.hitCharacter()
      })

      expect(result.current.character.abilities.endurance).toBe(
        result.current.characterNotModified.abilities.endurance - 2,
      )
      expect(result.current.characterNotModified.abilities.endurance).toBe(
        result.current.character.abilities.endurance + 2,
      )
      act(() => {
        result.current.resetEndurance()
      })
      expect(result.current.character.abilities.endurance).toBe(
        result.current.characterNotModified.abilities.endurance,
      )
    })
  })
})
