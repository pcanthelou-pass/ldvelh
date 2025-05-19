import { StateCreator } from 'zustand'

import { BookSlice } from './book'
import { GameSlice } from './game'
import { UserSlice } from './user'

export interface Slices {
  game: StateCreator<GameSlice, [], [], GameSlice>
  user: StateCreator<UserSlice, [], [], UserSlice>
  book: StateCreator<BookSlice, [], [], BookSlice>
}
