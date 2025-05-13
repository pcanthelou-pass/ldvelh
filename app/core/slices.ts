import { StateCreator } from 'zustand';

export interface GameSlice {
  date: string;
  setDate: (date: string) => void;
}

export interface UserSlice {
  pseudo: string;
  setPseudo: (pseudo: string) => void;
}

export interface BookSlice {
  title: string;
}

export interface Slices {
  game: StateCreator<GameSlice, [], [], GameSlice>;
  user: StateCreator<UserSlice, [], [], UserSlice>;
  book: StateCreator<BookSlice, [], [], BookSlice>;
}
