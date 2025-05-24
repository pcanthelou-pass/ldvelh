import { StateCreator } from 'zustand'

export interface BookIntroduction {
  title: string
  text: string
}

type EndPoint = 'success' | 'failure'

export type SceneKey = string

// Une scène « plate » :
export interface Scene {
  id: SceneKey // identifiant unique
  question: string // titre / question
  text: string // texte de la scène
  nextIds: string[] // liste d'id de la ou des scènes suivantes
  isEnding?: boolean // true si c'est une scène de fin
  endingType?: EndPoint
}

export type Scenes = Record<SceneKey, Scene>

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
  setScenes: (value: Record<SceneKey, Scene>) =>
    set((state) => ({ scenes: value })),
})
