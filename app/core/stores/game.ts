import {
  Book,
  Character,
  EmptyBook,
  EmptyCharacter,
  fromRawBook,
  RawBookType,
  SceneKey,
} from '@core'
import { createStore, StateCreator } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export interface GameProps {
  date: string
  history: SceneKey[]
  currentScene: SceneKey
  gameBook: Book
  character: Character
  characterNotModified: Character
}
export interface GameActions {
  setDate: (date: string) => void
  setBook: (book: RawBookType) => void
  setCharacter: (character: Character) => void
  startBook: () => void
  resetEndurance: () => void
  consumeItemByOne: (key: string) => void
  hitCharacter: (hit?: number) => void
  moveToScene: (scene: SceneKey) => void
  quitGame: () => void
}
export type GameState = GameProps & GameActions
export type GameStore = ReturnType<typeof createGameStore>
export const createGameStore = (initProps?: Partial<GameProps>) => {
  const DEFAULT_PROPS: GameProps = {
    gameBook: EmptyBook,
    history: [],
    currentScene: '',
    date: '',
    character: EmptyCharacter,
    characterNotModified: EmptyCharacter,
  }
  return createStore<GameState>()(
    immer((set) => ({
      ...DEFAULT_PROPS,
      ...initProps,
      setDate: (date: string) =>
        set((state) => {
          state.date = date
        }),
      setBook: (rawBook: RawBookType) =>
        set((state) => {
          state.gameBook = fromRawBook(rawBook)
          state.currentScene = ''
          state.history = []
          state.character = EmptyCharacter
          state.characterNotModified = EmptyCharacter
          state.date = ''
        }),
      setCharacter: (character: Character) =>
        set((state) => {
          state.currentScene = ''
          state.history = []
          state.character = character
          state.characterNotModified = character
        }),
      startBook: () =>
        set((state) => {
          state.history = []
          state.currentScene = '1'
        }),
      quitGame: () =>
        set((state) => {
          state.gameBook = EmptyBook
          state.history = []
          state.currentScene = ''
          state.character = EmptyCharacter
          state.characterNotModified = EmptyCharacter
        }),
      moveToScene: (scene: SceneKey) =>
        set((state) => {
          state.history.push(state.currentScene)
          state.currentScene = scene
        }),
      hitCharacter: (hit: number = 2) =>
        set((state) => {
          state.character.abilities.endurance -= hit
        }),
      resetEndurance: () =>
        set((state) => {
          state.character.abilities.endurance =
            state.characterNotModified.abilities.endurance
        }),
      consumeItemByOne: (key: string) =>
        set((state) => {
          if (state.character.items[key].quantity)
            state.character.items[key].quantity -= 1
        }),
    })),
  )
}

export type GameSlice = GameProps & GameActions

export type GameStoreType = StateCreator<GameSlice, [], [], GameSlice>

export const createGameSlice: GameStoreType = (set) => ({
  gameBook: EmptyBook,
  history: [],
  currentScene: '',
  date: '',
  character: EmptyCharacter,
  characterNotModified: EmptyCharacter,
  setDate: (date: string) =>
    set((state) => {
      state.date = date
    }),
  setBook: (rawBook: RawBookType) =>
    set((state) => {
      state.gameBook = fromRawBook(rawBook)
      state.currentScene = ''
      state.history = []
      state.character = EmptyCharacter
      state.characterNotModified = EmptyCharacter
      state.date = ''
    }),
  setCharacter: (character: Character) =>
    set((state) => {
      state.currentScene = ''
      state.history = []
      state.character = character
      state.characterNotModified = character
    }),
  startBook: () =>
    set((state) => {
      state.history = []
      state.currentScene = '1'
    }),
  quitGame: () =>
    set((state) => {
      state.gameBook = EmptyBook
      state.history = []
      state.currentScene = ''
      state.character = EmptyCharacter
      state.characterNotModified = EmptyCharacter
    }),
  moveToScene: (scene: SceneKey) =>
    set((state) => {
      state.history.push(state.currentScene)
      state.currentScene = scene
    }),
  hitCharacter: (hit: number = 2) =>
    set((state) => {
      state.character.abilities.endurance -= hit
    }),
  resetEndurance: () =>
    set((state) => {
      state.character.abilities.endurance =
        state.characterNotModified.abilities.endurance
    }),
  consumeItemByOne: (key: string) =>
    set((state) => {
      if (state.character.items[key].quantity)
        state.character.items[key].quantity -= 1
    }),
})
