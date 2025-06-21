import { useChooseSimpleStory } from '@core'
import { useGoToCreateUser } from '../../navigation/useGoToCreateUser'
import ChooseStoryView from './components/ChooseSimpleStoryView'

const ChooseSimpleStory = () => {
  const { title, description, getSelectedBook, setBook } =
    useChooseSimpleStory()
  const route = useGoToCreateUser()

  const onPress = () => {
    const book = getSelectedBook()
    if (book) {
      setBook(book)
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
