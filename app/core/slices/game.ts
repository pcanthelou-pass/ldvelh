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
}
export type GameSlice = Game & GameActions

export const createGameSlice: StateCreator<GameSlice, [], [], GameSlice> = (
  set,
) => ({
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
})
