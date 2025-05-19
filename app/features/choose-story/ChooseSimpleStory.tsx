import { useBookStore, useGameStore } from '@core'
import { ChooseStoryView } from './ChooseSimpleStoryView'

export const ChooseSimpleStory = () => {
  const selectedBook = useBookStore()
  const { setBook } = useGameStore()

  const onPress = () => {
    setBook(selectedBook)
  }

  return (
    <ChooseStoryView
      title={selectedBook.title}
      description={selectedBook.description}
      onPress={onPress}
    />
  )
}
