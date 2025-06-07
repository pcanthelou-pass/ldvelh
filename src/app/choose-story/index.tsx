import { useChooseStory } from '@core'
import { useGoToCreateUser } from '../../navigation/useGoToCreateUser'
import ChooseStoryView from './components/ChooseSimpleStoryView'

const ChooseSimpleStory = () => {
  const { title, description, getSelectedBook, setBook } = useChooseStory()
  const route = useGoToCreateUser()

  const onPress = () => {
    setBook(getSelectedBook())
    route()
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
