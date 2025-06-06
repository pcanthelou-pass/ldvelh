/**
 * Tous les services sont listés dans services/types.ts
 * Ce context ne fait que les exposer via le hook useServices()
 * - alert : pour afficher une alerte à l'utilisateur
 */
import { GameStore, UserStore } from '@/src/core'
import { createContext, useRef } from 'react'

export interface StoresProps {
  game: GameStore
  user: UserStore
}

export const StoreContext = createContext<StoreType>()

export interface StoreProviderProps {
  children: React.ReactNode
  slices?: StoresProps
}

// cf. Core
export const StoreProvider = ({ children, slices }: StoreProviderProps) => {
  const store = useRef(slices)

  return slices ? (
    <StoreContext.Provider value={store.current}>
      {children}
    </StoreContext.Provider>
  ) : (
    <>{children}</>
  )
}
