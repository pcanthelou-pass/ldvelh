import { BookIntroduction, Scene, SceneKey, Scenes } from '@core/classes'
import { StateCreator } from 'zustand'

// Livre complet normalisé
export interface Book {
  title: string
  description: string
  introduction: BookIntroduction
  scenes: Scenes
}

export const EmptyBook: Book = {
  title: '',
  description: '',
  introduction: {
    title: '',
    text: '',
  },
  scenes: {},
}
export interface BookActions {
  setFullBook: (value: Book) => void
  setTitle: (value: string) => void
  setDescription: (value: string) => void
  setIntroduction: (value: BookIntroduction) => void
  setScenes: (value: Scenes) => void
}

export type BookSlice = Book & BookActions

export const createBookSlice: StateCreator<BookSlice, [], [], BookSlice> = (
  set,
) => ({
  ...EmptyBook,
  setFullBook: (value: Book) => set((state) => ({ ...value })),
  setTitle: (value: string) =>
    set((state) => {
      state.title = value
    }),
  setDescription: (value: string) =>
    set((state) => {
      state.description = value
    }),
  setIntroduction: (value: BookIntroduction) =>
    set((state) => {
      state.introduction = value
    }),
  setScenes: (value: Record<SceneKey, Scene>) =>
    set((state) => {
      state.scenes = value
    }),
})
