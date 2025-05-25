import { ChooseStoryView } from './components'
import { useChooseStory } from './hooks'

export const ChooseSimpleStory = () => {
  const { selectedBook, setBook } = useChooseStory()

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
