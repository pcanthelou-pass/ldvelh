import { create } from 'zustand';

export type GameState = {
  date: string;
};

export type GameAction = {
  setDate: (date: string) => void;
};

const useGameStore = create<GameState & GameAction>((set) => ({
  date: Date().toString(),
  setDate: (date?: string) => set(() => ({ date: date ?? Date().toString() }))
}));

export default useGameStore;
