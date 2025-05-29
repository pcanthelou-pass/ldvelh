import { StateCreator } from 'zustand'

import { GameSlice } from './game'
import { UserSlice } from './user'

export interface Slices {
  game: StateCreator<GameSlice, [], [], GameSlice>
  user: StateCreator<UserSlice, [], [], UserSlice>
}
