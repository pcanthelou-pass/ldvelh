import { useGameStore } from '@core'
import { TEST_BOOK } from '../../shared/helpers/TEST_BOOK'

export const useChooseStory = () => {
  const setBook = useGameStore((state) => state.setBook)

  const getSelectedBook = () => {
    return TEST_BOOK
  }

  const title = getSelectedBook().title
  const description = getSelectedBook().description

  return { title, description, getSelectedBook, setBook }
}
