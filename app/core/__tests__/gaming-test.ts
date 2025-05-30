import { Character, useGameStore } from '@core'
import { TEST_BOOK, TEST_HERO, WrapperTest } from '@shared'
import { act, renderHook } from '@testing-library/react-native'

describe('Given the book is loaded, a hero is created', () => {
  const { result } = renderHook(useGameStore, { wrapper: WrapperTest })
  act(() => {
    result.current.setBook(TEST_BOOK)
    result.current.setCharacter(TEST_HERO as unknown as Character)
    result.current.startBook()
  })

  it('Then the game store is well positioned on scene 1', () => {
    expect(result.current.currentScene).toBe('1')
  })

  it('Then we are able to get first scenes infos', () => {
    const book = result.current.gameBook.scenes
    const scene = book?.getScene(result.current.currentScene)
    expect(scene?.id).toBe('1')
    expect(scene?.text).toBe(TEST_BOOK.scenes['1']?.text)
    expect(scene?.nextScenes?.[0]?.id).toBe('1-1')
    expect(scene?.nextScenes?.[1]?.id).toBe('1-2')
    expect(scene?.nextScenes?.[2]?.id).toBe('1-3')
  })

  it('Then we are able to move to another scenes', () => {
    const { result } = renderHook(useGameStore, { wrapper: WrapperTest })
    act(() => {
      result.current.setBook(TEST_BOOK)
      result.current.setCharacter(TEST_HERO as unknown as Character)
      result.current.startBook()
      result.current.moveToScene('1-1')
    })

    expect(result.current.currentScene).toBe('1-1')
    expect(result.current.history).toStrictEqual(['1'])

    const book = result.current.gameBook.scenes
    const scene = book.getScene(result.current.currentScene)

    expect(scene.nextScenes?.[0]?.id).toBe('2-1')
    expect(scene.nextScenes?.[1]?.id).toBe('2-2')

    act(() => {
      result.current.moveToScene('2-1')
    })
    expect(result.current.currentScene).toBe('2-1')
    expect(result.current.history).toStrictEqual(['1', '1-1'])
  })

  it('Then the hero can be hitted', () => {
    const { result } = renderHook(useGameStore, { wrapper: WrapperTest })
    act(() => {
      result.current.setBook(TEST_BOOK)
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
