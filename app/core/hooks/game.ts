import { GameSlice } from '../slices/game';
import { useZeStore } from './generic';

export function useGameStore(
  selector: (state: GameSlice) => GameSlice
): GameSlice {
  return useZeStore<GameSlice>(selector);
}
