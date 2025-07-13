import { useGameStore } from './useGameStore'

/**
 *
 * @returns { title: string, introduction: string | undefined, startBook: () => void }
 * A hook to read the introduction of a game book.
 * It retrieves the title and text of the introduction from the game store.
 * It also provides a function to start the book.
 */
export const useReadIntroduction = () => {
  const introduction = useGameStore((state) => state.bookIntro)
  const startBook = useGameStore((state) => state.startBook)

  return {
    title: introduction?.title ?? 'Error',
    introduction: introduction?.text ?? 'Error',
    startBook,
  }
}
