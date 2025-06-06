import { createGameStore, GameState, GameStore } from '@/src/core'
import { useStore } from 'zustand'

export let GAME_STORE: GameStore

export function useGameStore<U>(selector: (state: GameState) => U) {
  if (!GAME_STORE) {
    GAME_STORE = createGameStore()
  }

  return useStore(GAME_STORE, selector)
}
