import { useGameStore } from '@core'

export const useChooseStory = () => {
  const { gameBook, setBook } = useGameStore((state) => state)
  return { gameBook, setBook }
}
