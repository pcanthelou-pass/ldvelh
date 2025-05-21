import { GameSlice } from '@core'
import { useZeStore } from './genericStore'

export function useGameStore(
  selector?: (state: GameSlice) => GameSlice,
): GameSlice {
  return useZeStore<GameSlice>(selector)
}
