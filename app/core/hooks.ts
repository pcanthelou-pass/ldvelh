import { useGameStore } from './store';

export const useSetGameDate = () => {
  const setDate = useGameStore((state) => state.setDate);
  const date = Date().toString();
  setDate(date);

  return date;
};
