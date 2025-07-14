/**
 * Tous les services sont listés dans services/types.ts
 * Ce context ne fait que les exposer via le hook useServices()
 * - alert : pour afficher une alerte à l'utilisateur
 */
import { createStores, type StoresProps } from '@stores'
import { createContext, useContext, useRef } from 'react'

export const StoreContext = createContext<StoresProps | undefined>(undefined)

export const useStores = (): StoresProps => {
  const context = useContext(StoreContext)
  if (!context) throw new Error('useStores must be within StoreProvider')
  return context
}

export interface StoreProviderProps {
  children: React.ReactNode
  slices?: StoresProps
}

// cf. Core
export const StoreProvider = ({ children, slices }: StoreProviderProps) => {
  const store = useRef<StoresProps>(slices ?? createStores())

  return (
    <StoreContext.Provider value={store.current}>
      {children}
    </StoreContext.Provider>
  )
}
