import { useGameStore } from '@core'

export const useReadIntroduction = () => {
  const { gameBook: book } = useGameStore()

  return {
    title: book?.introduction?.title ?? 'Error',
    introduction: book?.introduction?.text,
  }
}
