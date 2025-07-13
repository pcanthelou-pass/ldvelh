import { useGameStore } from './useGameStore'

/**
 *
 * @returns { title: string, introduction: string | undefined, startBook: () => void }
 * A hook to read the introduction of a game book.
 * It retrieves the title and text of the introduction from the game store.
 * It also provides a function to start the book.
 */
export const useReadIntroduction = () => {
  const bookIntro = useGameStore((state) => state.gameBook.introduction)
  const startBookFromStore = useGameStore((state) => state.startBook)

  const startBook = () => {
    startBookFromStore()
  }

  return {
    title: bookIntro?.title ?? 'Error',
    introduction: bookIntro?.text ?? 'Error',
    startBook,
  }
}
