/**
 * Tous les services sont listés dans services/types.ts
 * Ce context ne fait que les exposer via le hook useServices()
 * - alert : pour afficher une alerte à l'utilisateur
 */
import { createStoreFromSlices, Slices, StoreFromSlices } from '@core';
import { createContext, useRef } from 'react';

export const StoreContext = createContext<StoreFromSlices | null>(null);

export interface StoreProviderProps {
  children: React.ReactNode;
  slices?: Slices;
}

// cf. Core
export const StoreProvider = ({ children, slices }: StoreProviderProps) => {
  const store = useRef<StoreFromSlices>(null);
  store.current ??= createStoreFromSlices(slices);

  return slices ? (
    <StoreContext.Provider value={store.current}>
      {children}
    </StoreContext.Provider>
  ) : (
    <>{children}</>
  );
};
