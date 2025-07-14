import { BuildBackpack } from '@actions'
import { bookService } from '@services/book'
import {
  BookIntroductionProps,
  CharacterRawProps,
  DEFAULT_GAME_PROPS,
  EmptyBookIntroduction,
  EmptyCharacter,
  EmptyScene,
  EmptyBookIntroduction,
  EmptyScenes,
  GameProps,
  GameState,
} from '@types'
import { createStore } from 'zustand'
import { immer } from 'zustand/middleware/immer'

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
      setBook: (book: { id: string; intro: BookIntroductionProps }) =>
        set((state) => {
          state.bookId = book.id
          state.bookIntro = book.intro
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
          state.currentScene = bookService.getScene(state.bookId, '1')
        }),
      quitGame: () =>
        set((state) => {
          state.bookId = ''
          state.bookIntro = EmptyBookIntroduction
          state.history = []
          state.currentScene = { ...EmptyScene, actions: [] }
          state.character = EmptyCharacter
          state.characterNotModified = EmptyCharacter
        }),
      moveToScene: (scene: string) =>
        set((state) => {
          state.history.push(state.currentScene.id)
          state.currentScene = bookService.getScene(state.bookId, scene)
        }),
      hitCharacter: (hit: number = 2) =>
        set((state) => {
          state.character.abilities.endurance -= hit
        }),
      hitOpponent: (hit: number = 2) =>
        set((state) => {
          if (state.currentScene.opponent) {
            state.currentScene.opponent = {
              ...state.currentScene.opponent,
              abilities: {
                ...state.currentScene.opponent.abilities,
                endurance:
                  state.currentScene.opponent.abilities.endurance - hit,
              },
            }
          }
        }),
      decreaseChance: () =>
        set((state) => {
          state.character.abilities.chance -= 1
        }),
      resetEndurance: () =>
        set((state) => {
          state.character.abilities.endurance =
            state.characterNotModified.abilities.endurance
        }),
      consumeItemByOne: (key: string) =>
        set((state) => {
          const index = state.character.items.findLastIndex(
            (i) => i.key === key,
          )
          const item = state.character.items[index]
          if (!item) return
          if (item.quantity > 1) {
            state.character.items[index] = {
              ...item,
              quantity: item.quantity - 1,
            }
          } else {
            state.character.items.splice(index, 1)
          }
        }),
    })),
  )
}
