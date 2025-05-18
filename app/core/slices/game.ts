import { StateCreator } from 'zustand'
import { Book, EmptyBook } from './book'

export interface Game {
  date: string
  book: Book
}
export interface GameActions {
  setDate: (date: string) => void
  setBook: (book: Book) => void
}
export type GameSlice = Game & GameActions

export const createGameSlice: StateCreator<GameSlice, [], [], GameSlice> = (
  set,
) => ({
  book: EmptyBook,
  date: Date.now().toString(),
  setDate: (date: string) => set((state) => ({ ...state, date: date })),
  setBook: (book: Book) =>
    set((state) => ({ ...state, book: book, date: Date.now().toString() })),
})
