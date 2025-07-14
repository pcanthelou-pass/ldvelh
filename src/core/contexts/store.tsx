/**
 * Tous les services sont listés dans services/types.ts
 * Ce context ne fait que les exposer via le hook useServices()
 * - alert : pour afficher une alerte à l'utilisateur
 */
import {
  createGameStore,
  createUserStore,
  type GameStore,
  type UserStore,
} from '@stores'
import { createContext, useRef } from 'react'

export interface StoresProps {
  game: GameStore
  user: UserStore
}

export const StoreContext = createContext<StoresProps | null>(null)

export interface StoreProviderProps {
  children: React.ReactNode
  slices?: StoresProps
}

// cf. Core
export const StoreProvider = ({ children, slices }: StoreProviderProps) => {
  const store = useRef<StoresProps>(
    slices ?? { game: createGameStore(), user: createUserStore() },
  )

  return (
    <StoreContext.Provider value={store.current}>
      {children}
    </StoreContext.Provider>
  )
}
