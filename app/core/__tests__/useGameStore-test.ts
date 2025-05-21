import {
  Book,
  Character,
  EmptyBook,
  EmptyCharacter,
  rawGetSceneInfos,
  useGameStore,
} from '@core'
import { WrapperTest } from '@features/helpers/WrapperTest'
import { act, renderHook } from '@testing-library/react-native'

export const TEST_BOOK: Book = {
  title: 'Mon livre',
  description: 'Mon livre description',
  introduction: {
    title: 'Scène #1',
    text: 'Dolor fugiat eiusmod',
  },
  scenes: {
    '1': {
      question: 'Scène #1',
      text: 'Texte de la scène #1',
      next: {
        '1-1': {
          question: 'Scène #1-1',
          text: 'Texte de la scène #1 1',
          next: {
            '2-1': {
              question: 'Scène #2-1',
              text: 'Texte de la scène #2 1',
              next: {
                '3-1': {
                  question: 'Scène #3-1',
                  text: 'Texte de la scène #3 1',
                  next: 'end',
                },
                '3-2': {
                  question: 'Scène #3-2',
                  text: 'Texte de la scène #3 2',
                  next: 'end',
                },
                '3-3': {
                  question: 'Scène #3-3',
                  text: 'Texte de la scène #3 3',
                  next: 'end',
                },
              },
            },
            '2-2': {
              question: 'Scène #2-2',
              text: 'Texte de la scène #2 2',
              next: 'end-fail',
            },
          },
        },
        '1-2': {
          question: 'Scène #1-2',
          text: 'Texte de la scène #1 2',
          next: 'end-fail',
        },
      },
    },
  },
}

export const TEST_HERO: Character = {
  name: 'Héro',
  abilities: {
    agility: 8,
    endurance: 18,
    chance: 8,
  },
  items: {
    "Potion d'endurance": {
      quantity: 1,
      value: 10,
      power: 'potion',
      effect: { endurance: 99 },
    },
  },
}

describe('useGameStore', () => {
  it('when just created, has an empty book', () => {
    const { result } = renderHook(useGameStore, { wrapper: WrapperTest })
    expect(result.current.book).toBe(EmptyBook)
  })

  it('when just created, has an empty character', () => {
    const { result } = renderHook(useGameStore, { wrapper: WrapperTest })
    expect(result.current.character).toStrictEqual(EmptyCharacter)
  })

  it('when game is set, character is empty and book is filled', () => {
    const { result } = renderHook(useGameStore, { wrapper: WrapperTest })
    expect(result.current.book).toBe(EmptyBook)
    expect(result.current.character).toStrictEqual(EmptyCharacter)

    act(() => {
      result.current.setBook(TEST_BOOK)
    })

    expect(result.current.book).not.toStrictEqual(EmptyBook)
    expect(result.current.book.title).toBe('Mon livre')
    expect(result.current.character).toBe(EmptyCharacter)
  })

  it('when game is set and character is set then there is a save of the character', () => {
    const { result } = renderHook(useGameStore, { wrapper: WrapperTest })
    act(() => {
      result.current.setBook(TEST_BOOK as unknown as Book)
      result.current.setCharacter(TEST_HERO as unknown as Character)
    })

    expect(result.current.book).not.toBe(EmptyBook)
    expect(result.current.book.title).toBe('Mon livre')
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

    expect(result.current.book.introduction).toStrictEqual({
      title: TEST_BOOK.introduction.title,
      text: TEST_BOOK.introduction.text,
    })
  })

  describe.only('Given the book is loaded, a hero is created', () => {
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
      const infos = rawGetSceneInfos('1', result.current.book)
      expect(infos).toStrictEqual([
        { dest: '1-1', question: 'Scène #1-1' },
        { dest: '1-2', question: 'Scène #1-2' },
      ])
    })
  })
})
