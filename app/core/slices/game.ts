import { StateCreator } from 'zustand'
import { Book, EmptyBook } from './book'
import { Character, EmptyCharacter } from './character'

export interface Game {
  date: string
  currentScene: string
  gameBook: Book
  character: Character
  characterNotModified: Character
}
export interface GameActions {
  setDate: (date: string) => void
  setBook: (book: Book) => void
  setCharacter: (character: Character) => void
  startBook: () => void
  resetEndurance: () => void
  consumeItemByOne: (key: string) => void
  hitCharacter: (hit?: number) => void
}
export type GameSlice = Game & GameActions

export type GameStoreType = StateCreator<GameSlice, [], [], GameSlice>

export const createGameSlice: GameStoreType = (set) => ({
  gameBook: EmptyBook,
  currentScene: '',
  date: Date.now().toString(),
  character: EmptyCharacter,
  characterNotModified: EmptyCharacter,
  setDate: (date: string) => set((state) => ({ ...state, date })),
  setBook: (book: Book) =>
    set((state) => ({
      ...state,
      gameBook: book,
      currentScene: '',
      character: EmptyCharacter,
      characterNotModified: EmptyCharacter,
      date: Date.now().toString(),
    })),
  setCharacter: (character: Character) =>
    set((state) => ({
      ...state,
      currentScene: '',
      character,
      characterNotModified: character,
    })),
  startBook: () =>
    set((state) => ({
      ...state,
      currentScene: '1',
    })),
  hitCharacter: (hit: number = 2) =>
    set((state) => ({
      ...state,
      character: {
        ...state.character,
        abilities: {
          ...state.character.abilities,
          endurance: state.character.abilities.endurance - hit,
        },
      },
    })),
  resetEndurance: () =>
    set((state) => ({
      ...state,
      character: {
        ...state.character,
        abilities: {
          ...state.character.abilities,
          endurance: state.characterNotModified.abilities.endurance,
        },
      },
    })),
  consumeItemByOne: (key: string) =>
    set((state) => ({
      ...state,
      character: {
        ...state.character,
        items: {
          ...state.character.items,
          [key]: {
            ...state.character.items[key],
            quantity: state.character.items[key]?.quantity - 1,
          },
        },
      },
    })),
})
