import { useGameStore } from '@core'

export const useReadIntroduction = () => {
  const introduction = useGameStore((state) => state.gameBook.introduction)

  return {
    title: introduction?.title ?? 'Error',
    introduction: introduction?.text,
  }
}
