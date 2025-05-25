import { useBookStore, useGameStore } from '@core'

export const useChooseStory = () => {
  const selectedBook = useBookStore()
  const { setBook } = useGameStore()
  return { selectedBook, setBook }
}
