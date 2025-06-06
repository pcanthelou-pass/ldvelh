import { BuildBackpack } from '@/src/core/actions/build-backpack'
import { BuildScene } from '@/src/core/actions/build-scene'
import { CharacterRawProps, EmptyCharacter } from '@/src/core/types/character'
import { EmptyScene } from '@/src/core/types/scene'
import { createStore } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { BookProps, EmptyBook } from '../types/book'
import { DEFAULT_GAME_PROPS, GameProps, GameState } from '../types/game'

export type GameStore = ReturnType<typeof createGameStore>

export const createGameStore = (initProps?: Partial<GameProps>) => {
  return createStore<GameState>()(
    immer((set) => ({
      ...DEFAULT_GAME_PROPS,
      ...initProps,
      setDate: (date: string) =>
        set((state) => {
          state.date = date
        }),
      setBook: (rawBook: BookProps) =>
        set((state) => {
          state.gameBook = rawBook
          state.currentScene = { ...EmptyScene, actions: [] }
          state.history = []
          state.character = EmptyCharacter
          state.characterNotModified = EmptyCharacter
          state.date = ''
        }),
      setCharacter: (character: CharacterRawProps) => {
        const items = BuildBackpack(character.items)
        set((state) => {
          state.currentScene = { ...EmptyScene, actions: [] }
          state.history = []
          state.character = {
            ...character,
            items: items,
          }
          state.characterNotModified = {
            ...character,
            items: items,
          }
        })
        return { ...character, items: items }
      },
      startBook: () =>
        set((state) => {
          state.history = []
          state.currentScene = BuildScene('1', state.gameBook.scenes)
        }),
      quitGame: () =>
        set((state) => {
          state.gameBook = EmptyBook
          state.history = []
          state.currentScene = { ...EmptyScene, actions: [] }
          state.character = EmptyCharacter
          state.characterNotModified = EmptyCharacter
        }),
      moveToScene: (scene: string) =>
        set((state) => {
          state.history.push(state.currentScene.id)
          state.currentScene = BuildScene(scene, state.gameBook.scenes)
        }),
      hitCharacter: (hit: number = 2) =>
        set((state) => {
          state.character.abilities.endurance -= hit
        }),
      hitOpponent: (hit: number = 2) =>
        set((state) => {
          state.currentScene.opponent.abilities.endurance -= hit
        }),
      resetEndurance: () =>
        set((state) => {
          state.character.abilities.endurance =
            state.characterNotModified.abilities.endurance
        }),
      consumeItemByOne: (key: string) =>
        set((state) => {
          const item = state.character.items.get(key)
          if (!item) return
          if (item.quantity > 1) {
            state.character.items.set(key, {
              ...item,
              quantity: item.quantity - 1,
            })
          } else {
            state.character.items.delete(key)
          }
        }),
    })),
  )
}
