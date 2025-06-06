import { useGameStore } from '@/src/core'

export const useReadIntroduction = () => {
  const introduction = useGameStore((state) => state.gameBook.introduction)
  const startBook = useGameStore((state) => state.startBook)

  return {
    title: introduction?.title ?? 'Error',
    introduction: introduction?.text,
    startBook,
  }
}
