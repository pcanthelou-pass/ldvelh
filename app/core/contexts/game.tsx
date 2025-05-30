import { createGameStore, GameState, GameStore } from '@core'
import { createContext, useContext, useRef } from 'react'
import { useStore } from 'zustand'

export const GameContext = createContext<GameStore | null>(null)

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<GameStore>()
  if (!storeRef.current) {
    storeRef.current = createGameStore()
  }
  return (
    <GameContext.Provider value={storeRef.current}>
      {children}
    </GameContext.Provider>
  )
}

export function useGameContext<T>(selector: (state: GameState) => T): T {
  const store = useContext(GameContext)
  if (!store) throw new Error('Missing GameContext.Provider in the tree')
  return useStore(store, selector)
}
