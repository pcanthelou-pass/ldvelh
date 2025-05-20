import { StateCreator } from 'zustand'

export interface BookIntroduction {
  title: string
  text: string
}

type EndPoint = 'end' | 'end-fail'

export interface Scene {
  question: string
  text: string
  next: Scenes | EndPoint
}

export type Scenes = Record<string, Scene>
export interface Book {
  title: string
  description: string
  introduction: BookIntroduction
  scenes: Record<string, Scene> | null
}

export const EmptyBook = {
  title: '',
  description: '',
  introduction: {
    title: '',
    text: '',
  },
  scenes: null,
}
export interface BookActions {
  setFullBook: (value: Book) => void
  setTitle: (value: string) => void
  setDescription: (value: string) => void
  setIntroduction: (value: BookIntroduction) => void
  setScenes: (value: Record<string, Scene>) => void
}

export type BookSlice = Book & BookActions

export const createBookSlice: StateCreator<BookSlice, [], [], BookSlice> = (
  set,
) => ({
  ...EmptyBook,
  setFullBook: (value: Book) => set((state) => ({ ...state, value })),
  setTitle: (value: string) => set((state) => ({ title: value })),
  setDescription: (value: string) => set((state) => ({ description: value })),
  setIntroduction: (value: BookIntroduction) =>
    set((state) => ({ introduction: value })),
  setScenes: (value: Record<string, Scene>) =>
    set((state) => ({ scenes: value })),
})
