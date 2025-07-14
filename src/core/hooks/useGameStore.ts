import { useStores } from '@contexts'
import { GameState } from '@types'
import { useStore } from 'zustand'

export function useGameStore<U>(selector: (state: GameState) => U) {
  const { game } = useStores()
  return useStore(game, selector)
}

export const useGameStoreApi = () => {
  const { game } = useStores()
  return game
}
