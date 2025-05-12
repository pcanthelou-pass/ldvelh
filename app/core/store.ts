import { create } from 'zustand';
import { GameAction, GameState } from './types';

export const useGameStore = create<GameState & GameAction>((set) => ({
  date: Date().toString(),
  setDate: (date?: string) => set(() => ({ date: date ?? Date().toString() }))
}));
