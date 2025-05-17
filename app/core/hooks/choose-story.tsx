import { getStory } from '@core';
import { useBookStore } from './book-store';

export const useChooseStory = () => {
  const { title, description } = getStory();
  const { setTitle, setDescription } = useBookStore((state) => state);
  setTitle(title);
  setDescription(description);
  return { title, description };
};
