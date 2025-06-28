import { TEST_BOOK } from '@helpers'
import { useGameStore } from './useGameStore'

export const useChooseSimpleStory = () => {
  const setBook = useGameStore((state) => state.setBook)

  const getSelectedBook = () => {
    return TEST_BOOK
  }

  const title = getSelectedBook().title
  const description = getSelectedBook().description

  return { title, description, getSelectedBook, setBook }
}
