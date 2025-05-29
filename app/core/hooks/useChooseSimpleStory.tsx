import { useGameStore } from '@core'

export const useChooseStory = () => {
  const { gameBook, setBook } = useGameStore()
  return { gameBook, setBook }
}
