import { useChooseStory } from '@core'
import { useGoToCreateUSer } from '../../navigation/useGoToCreateUSer'
import ChooseStoryView from './components/ChooseSimpleStoryView'

const ChooseSimpleStory = () => {
  const { title, description, getSelectedBook, setBook } = useChooseStory()
  const route = useGoToCreateUSer()

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
