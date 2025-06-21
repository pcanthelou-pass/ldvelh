import { useChooseSimpleStory } from '@core'
import { useGoToCreateUser } from '../../navigation/useGoToCreateUser'
import ChooseStoryLoadingView from './components/ChooseSimpleStoryLoadingView'
import ChooseStoryView from './components/ChooseSimpleStoryView'

const ChooseSimpleStory = () => {
  const { title, description, getSelectedBook, setBook, loading } =
    useChooseSimpleStory()
  const route = useGoToCreateUser()

  const onPress = () => {
    const book = getSelectedBook()
    if (book) {
      setBook(book)
      route()
    }
  }
  if (loading) return <ChooseStoryLoadingView />
  return (
    <ChooseStoryView
      title={title}
      description={description}
      onPress={onPress}
    />
  )
}

export default ChooseSimpleStory
