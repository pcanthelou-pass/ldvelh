import { useChooseStory } from '@core'
import { TEST_BOOK } from '@shared'
import ChooseStoryView from './components/ChooseSimpleStoryView'

const ChooseSimpleStory = () => {
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
  // return (
  //   <View>
  //     <Text>About screen</Text>
  //   </View>
  // )
}

export default ChooseSimpleStory
