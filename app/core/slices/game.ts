import { StateCreator } from 'zustand'
import { Book, EmptyBook } from './book'
import { Character, EmptyCharacter } from './character'

export interface Game {
  date: string
  book: Book
  character: Character
  characterNotModified: Character
}
export interface GameActions {
  setDate: (date: string) => void
  setBook: (book: Book) => void
  setCharacter: (character: Character) => void
}
export type GameSlice = Game & GameActions

export const createGameSlice: StateCreator<GameSlice, [], [], GameSlice> = (
  set,
) => ({
  book: EmptyBook,
  date: Date.now().toString(),
  character: EmptyCharacter,
  characterNotModified: EmptyCharacter,
  setDate: (date: string) => set((state) => ({ ...state, date })),
  setBook: (book: Book) =>
    set((state) => ({
      ...state,
      book,
      character: EmptyCharacter,
      characterNotModified: EmptyCharacter,
      date: Date.now().toString(),
    })),
  setCharacter: (character: Character) =>
    set((state) => ({
      ...state,
      character,
      characterNotModified: character,
    })),
})
