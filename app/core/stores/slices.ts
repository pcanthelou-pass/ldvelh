import { StateCreator } from 'zustand'

import { GameSlice } from './game'

export interface Slices {
  game: StateCreator<GameSlice, [], [], GameSlice>
}
