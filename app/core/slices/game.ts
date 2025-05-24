import { StateCreator } from 'zustand'
import { Book, EmptyBook, SceneKey } from './book'
import { Character, EmptyCharacter } from './character'

export interface Game {
  date: string
  history: SceneKey[]
  currentScene: SceneKey
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
  moveToScene: (scene: SceneKey) => void
  quitGame: () => void
}
export type GameSlice = Game & GameActions

export type GameStoreType = StateCreator<GameSlice, [], [], GameSlice>

export const createGameSlice: GameStoreType = (set) => ({
  gameBook: EmptyBook,
  history: [],
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
      history: [],
      character: EmptyCharacter,
      characterNotModified: EmptyCharacter,
      date: Date.now().toString(),
    })),
  setCharacter: (character: Character) =>
    set((state) => ({
      ...state,
      currentScene: '',
      history: [],
      character,
      characterNotModified: character,
    })),
  startBook: () =>
    set((state) => ({
      ...state,
      history: [],
      currentScene: '1',
    })),
  quitGame: () =>
    set((state) => ({
      ...state,
      gameBook: EmptyBook,
      history: [],
      currentScene: '',
      character: EmptyCharacter,
      characterNotModified: EmptyCharacter,
    })),
  moveToScene: (scene: SceneKey) =>
    set((state) => ({
      ...state,
      history: [...state.history, state.currentScene],
      currentScene: scene,
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
