import { useChooseStory } from '@core'
import { TEST_BOOK } from '@shared'
import { useRouter } from 'expo-router'
import { useCallback } from 'react'
import ChooseStoryView from './components/ChooseSimpleStoryView'

const ChooseSimpleStory = () => {
  const { setBook } = useChooseStory()
  const router = useRouter()

  const onPress = useCallback(async () => {
    setBook(TEST_BOOK)
    router.push('/create-user')
  }, [])

  return (
    <ChooseStoryView
      title={TEST_BOOK.title}
      description={TEST_BOOK.description}
      onPress={onPress}
    />
  )
}

export default ChooseSimpleStory
