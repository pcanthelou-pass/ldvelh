import { getBooks, ShortListOfStories } from '@core'
import { useEffect, useState } from 'react'

/**
 * Get the stories available and build a list of them so the user can make a choice
 *
 * @returns array of ShortListOfStories
 */
export const useGetStoriesToChoose = (): ShortListOfStories => {
  const [books, setBooks] = useState<ShortListOfStories>([])

  useEffect(() => {
    const booksRead = getBooks()
    if (booksRead) {
      setBooks(
        booksRead.map((book, index) => ({
          name: book.title,
          text: book.description,
          reference: index,
        })),
      )
    }
  }, [])

  return books
}
