import { BookProps, ShortListOfStories } from '@types'
import { useState } from 'react'

/**
 * Get the stories available and build a list of them so the user can make a choice
 */
export const useGetStoriesToChoose = (
  bookGetter: () => Promise<BookProps[]>,
) => {
  const [books, setBooks] = useState<ShortListOfStories>([])
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const selectBook = async (
    key: number | string,
  ): Promise<BookProps | undefined> => {
    const booksRead = await bookGetter()
    return booksRead?.at(Number(key))
  }

  const load = async () => {
    try {
      setLoading(true)
      const booksRead = await bookGetter()
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
