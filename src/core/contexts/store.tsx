/**
 * Tous les services sont listés dans services/types.ts
 * Ce context ne fait que les exposer via le hook useServices()
 * - alert : pour afficher une alerte à l'utilisateur
 */
import { GameStore, UserStore } from '@core'
import { createContext, useRef } from 'react'

export interface StoresProps {
  game: GameStore
  user: UserStore
}

export const StoreContext = createContext<StoresProps>({
  game: null as any,
  user: null as any,
})

export interface StoreProviderProps {
  children: React.ReactNode
  slices?: StoresProps
}

// cf. Core
export const StoreProvider = ({ children, slices }: StoreProviderProps) => {
  const store = useRef<StoresProps>(
    slices ?? {
      game: null as any,
      user: null as any,
    },
  )

  return (
    <StoreContext.Provider value={store.current}>
      {children}
    </StoreContext.Provider>
  )
}
