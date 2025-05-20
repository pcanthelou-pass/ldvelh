import { EmptyBook, EmptyCharacter, useGameStore } from '@core'
import { WrapperTest } from '@features/WrapperTest'
import { act, renderHook } from '@testing-library/react-native'

describe('useGameStore', () => {
  it('when just created, has an empty book', () => {
    const { result } = renderHook(useGameStore, { wrapper: WrapperTest })
    expect(result.current.book).toBe(EmptyBook)
  })
  it('when just created, has an empty character', () => {
    const { result } = renderHook(useGameStore, { wrapper: WrapperTest })
    expect(result.current.character).toBe(EmptyCharacter)
  })
  it('when game is set, character is empty and book is filled', () => {
    const { result } = renderHook(useGameStore, { wrapper: WrapperTest })
    act(() => {
      result.current.setBook({
        title: 'Mon livre',
        description: 'Mon livre description',
      })
    })

    expect(result.current.book).not.toBe(EmptyBook)
    expect(result.current.book.title).toBe('Mon livre')
    expect(result.current.character).toBe(EmptyCharacter)
  })
  it('when game is set and character is set then there is a save of the character', () => {
    const { result } = renderHook(useGameStore, { wrapper: WrapperTest })
    act(() => {
      result.current.setBook({
        title: 'Mon livre',
        description: 'Mon livre description',
      })
      result.current.setCharacter({
        name: 'Mon personnage',
        items: {},
        abilities: {
          agility: 10,
          endurance: 20,
          chance: 10,
        },
      })
    })

    expect(result.current.book).not.toBe(EmptyBook)
    expect(result.current.book.title).toBe('Mon livre')
    expect(result.current.character).not.toBe(EmptyCharacter)
    expect(result.current.character.name).toBe('Mon personnage')
    expect(result.current.characterNotModified).not.toBe(EmptyCharacter)
    expect(result.current.characterNotModified.name).toBe('Mon personnage')
  })
})
