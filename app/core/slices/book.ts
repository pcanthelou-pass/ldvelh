import { StateCreator } from 'zustand'

export interface BookIntroduction {
  title: string
  text: string
}

export interface Book {
  title: string
  description: string
  introduction?: BookIntroduction
}

export const EmptyBook = {
  title: '',
  description: '',
  introduction: {
    title: '',
    text: '',
  },
}
export interface BookActions {
  setTitle: (value: string) => void
  setDescription: (value: string) => void
  setIntroduction: (value: BookIntroduction) => void
}

export type BookSlice = Book & BookActions

export const createBookSlice: StateCreator<BookSlice, [], [], BookSlice> = (
  set,
) => ({
  ...EmptyBook,
  setTitle: (value: string) => set((state) => ({ title: value })),
  setDescription: (value: string) => set((state) => ({ description: value })),
  setIntroduction: (value: BookIntroduction) =>
    set((state) => ({ introduction: value })),
})
