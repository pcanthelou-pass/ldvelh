import { useContext } from 'react'
import { useStore } from 'zustand'
import { StoreContext } from '../contexts'

export function useZeStore<T>(selector: any): T {
  const store = useContext(StoreContext)
  if (!store) throw new Error('Missing StoreContext.Provider in the tree')
  return useStore(store, selector)
}
