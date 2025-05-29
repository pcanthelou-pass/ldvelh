import { useChooseStory } from '@core'
import { TEST_BOOK } from '@shared/helpers'
import { ChooseStoryView } from './components'

export const ChooseSimpleStory = () => {
  const { setBook } = useChooseStory()

  const onPress = () => {
    setBook(TEST_BOOK)
  }

  return (
    <ChooseStoryView
      title={TEST_BOOK.title}
      description={TEST_BOOK.description}
      onPress={onPress}
    />
  )
}
