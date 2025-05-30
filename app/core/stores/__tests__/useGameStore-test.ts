import { Character, EmptyBook, EmptyCharacter, useGameStore } from '@core'
import { TEST_BOOK, TEST_HERO, WrapperTest } from '@shared'
import { act, renderHook } from '@testing-library/react-native'

describe('useGameStore', () => {
  it('when just created, has an empty book', () => {
    const { result } = renderHook(useGameStore, { wrapper: WrapperTest })
    expect(result.current.gameBook).toBe(EmptyBook)
    expect(result.current.gameBook).toStrictEqual(EmptyBook)
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
    expect(result.current.gameBook.introduction.title).toBe(
      TEST_BOOK.introduction.title,
    )
    expect(result.current.gameBook.title).toBe('Mon livre')
    expect(result.current.character).toBe(EmptyCharacter)
  })

  it('when game is set and character is set then there is a save of the character', () => {
    const { result } = renderHook(useGameStore, { wrapper: WrapperTest })
    act(() => {
      result.current.setBook(TEST_BOOK)
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
      result.current.setBook(TEST_BOOK)
    })

    expect(result.current.gameBook.introduction.title).toBe(
      TEST_BOOK.introduction.title,
    )
    expect(result.current.gameBook.introduction.text).toBe(
      TEST_BOOK.introduction.text,
    )
  })
})
