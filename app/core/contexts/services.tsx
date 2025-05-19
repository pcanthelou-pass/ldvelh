/**
 * Tous les services sont listés dans services/types.ts
 * Ce context ne fait que les exposer via le hook useServices()
 * - alert : pour afficher une alerte à l'utilisateur
 */
import { Services } from '@shared/services'
import { createContext, useContext, useMemo } from 'react'

export const ServicesContext = createContext<Services | null>(null)

export interface ServicesProviderProps {
  children: React.ReactNode
  services: Services
}

// Le hook principale à réutiliser dans les composants pour utiliser les services
export const useServices = (): Services => {
  const context = useContext(ServicesContext)
  if (!context) throw new Error('useServices must be within ServicesProvider')
  return context
}

// cf. Core
export const ServicesProvider = ({
  children,
  services,
}: ServicesProviderProps) => {
  const memoizedServices = useMemo(() => services, [services])

  return (
    <ServicesContext.Provider value={memoizedServices}>
      {children}
    </ServicesContext.Provider>
  )
}
