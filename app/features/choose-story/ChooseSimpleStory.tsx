import { useBookStore, useGameStore } from '@core';
import { ChooseStoryView } from './ChooseSimpleStoryView';

export const ChooseSimpleStory = () => {
  const book = useBookStore();
  const { setBook } = useGameStore();

  const onPress = () => {
    setBook(book);
  };

  return (
    <ChooseStoryView
      title={book.title}
      description={book.description}
      onPress={onPress}
    />
  );
};
