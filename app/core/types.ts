import { Services } from '@services';
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

export interface ServicesProviderProps {
  children: React.ReactNode;
  services: Services;
}
export interface StoreProviderProps {
  children: React.ReactNode;
  slices?: Slices;
}
