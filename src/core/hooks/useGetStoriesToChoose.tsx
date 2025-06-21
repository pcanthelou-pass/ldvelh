import { getBooks, ShortListOfStories, useGameStore } from '@core'
import { useState } from 'react'

/**
 * Get the stories available and build a list of them so the user can make a choice
 */
export const useGetStoriesToChoose = () => {
  const [books, setBooks] = useState<ShortListOfStories>([])
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const setBook = useGameStore((state) => state.setBook)

  const selectBook = async (key: number | string) => {
    const booksRead = await getBooks()
    if (booksRead) {
      setBook(booksRead[key])
    }
  }

  const load = async () => {
    try {
      setLoading(true)
      const booksRead = await getBooks()
      if (booksRead) {
        setBooks(
          booksRead.map((book, index) => ({
            name: book.title,
            text: book.description,
            reference: index,
          })),
        )
      }
      setLoading(false)
    } catch (e) {
      setError(e as Error)
      setLoading(false)
    }
  }

  return { books, error, loading, load, selectBook }
}
