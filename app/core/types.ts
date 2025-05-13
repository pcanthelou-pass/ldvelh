import { StateCreator } from 'zustand';

export interface GameState {
  date: string;
}

export interface GameAction {
  setDate: (date: string) => void;
}

export type GameSlice = GameAction & GameState;

export interface Slices {
  game: StateCreator<GameSlice, [], [], GameSlice>;
}
