import { Services } from '@services';

export type GameState = {
  date: string;
};

export type GameAction = {
  setDate: (date: string) => void;
};

export interface ServicesProviderProps {
  children: React.ReactNode;
  services: Services;
}
