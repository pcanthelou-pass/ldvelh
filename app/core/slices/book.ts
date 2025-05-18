import { StateCreator } from 'zustand'

export interface Book {
  title: string
  description: string
}

export const EmptyBook = {
  title: '',
  description: '',
}
export interface BookActions {
  setTitle: (value: string) => void
  setDescription: (value: string) => void
}

export type BookSlice = Book & BookActions

export const createBookSlice: StateCreator<BookSlice, [], [], BookSlice> = (
  set,
) => ({
  title: '',
  description: '',
  setTitle: (value: string) => set((state) => ({ title: value })),
  setDescription: (value: string) => set((state) => ({ description: value })),
})
