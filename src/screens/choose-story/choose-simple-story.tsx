import { useChooseSimpleStory } from '@hooks'
import { useGoToCreateUser } from '@navigation'
import ChooseStoryView from './components/ChooseSimpleStoryView'

const ChooseSimpleStory = () => {
  const { title, description, getSelectedBook, setBook } =
    useChooseSimpleStory()
  const route = useGoToCreateUser()

  const onPress = () => {
    const book = getSelectedBook()
    if (book) {
      setBook({ id: 'TEST_BOOK', intro: book.introduction })
      route()
    }
  }
  return (
    <ChooseStoryView
      title={title}
      description={description}
      onPress={onPress}
    />
  )
}

export default ChooseSimpleStory
