import { Character, EmptyCharacter } from '@core'
import { SceneKey } from '@core/classes'
import { StateCreator } from 'zustand'
import { Book, EmptyBook } from './book'

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
  setDate: (date: string) =>
    set((state) => {
      state.date = date
    }),
  setBook: (book: Book) =>
    set((state) => {
      state.gameBook = book
      state.currentScene = ''
      state.history = []
      state.character = EmptyCharacter
      state.characterNotModified = EmptyCharacter
      state.date = Date.now().toString()
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
