import { BookSlice, Core, GameSlice, Slices, UserSlice } from '@core';
import { IAlertService } from '@services';
import { ReactNode } from 'react';
import { StateCreator } from 'zustand';

class MockAlertService implements IAlertService {
  show(message: string): void | string | ReactNode {
    return null;
  }
}

const createGameSlice: StateCreator<GameSlice, [], [], GameSlice> = (set) => ({
  date: '10/10/10',
  setDate: (date?: string) => set(() => ({ date }))
});
const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (set) => ({
  pseudo: 'PSEUDO',
  setPseudo: (pseudo) => set(() => ({ pseudo }))
});
const createBookSlice: StateCreator<BookSlice, [], [], BookSlice> = (set) => ({
  title: 'Test Book Title',
  description: 'Test Book Description',
  setTitle: (value: string) =>
    set((state) => ({
      title: value
    })),
  setDescription: (value: string) =>
    set((state) => ({
      description: value
    }))
});

const mockedServices = { alert: new MockAlertService() };
const mockedSlices: Slices = {
  game: createGameSlice,
  user: createUserSlice,
  book: createBookSlice
};

export const Wrapper = ({ children }: { children: ReactNode }) => (
  <Core services={mockedServices} slices={mockedSlices}>
    {children}
  </Core>
);
