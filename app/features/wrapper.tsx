import {
  Core,
  createBookSlice,
  createGameSlice,
  Slices,
  UserSlice,
} from '@core'
import { IAlertService } from '@services'
import { ReactNode } from 'react'
import { StateCreator } from 'zustand'

class MockAlertService implements IAlertService {
  show(message: string): void | string | ReactNode {
    return null
  }
}

const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (set) => ({
  pseudo: 'PSEUDO',
  setPseudo: (pseudo) => set(() => ({ pseudo })),
})

const mockedServices = { alert: new MockAlertService() }
const mockedSlices: Slices = {
  game: createGameSlice,
  user: createUserSlice,
  book: createBookSlice,
}

export const Wrapper = ({ children }: { children: ReactNode }) => (
  <Core services={mockedServices} slices={mockedSlices}>
    {children}
  </Core>
)
