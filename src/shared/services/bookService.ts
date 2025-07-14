import laGrotte from '@assets/books/la-grotte.json'
import testBook from '@assets/books/TEST_BOOK.json'
import { BookProps, ScenesProps, BookIntroductionProps } from '@types'

const BOOKS: Record<string, BookProps> = {
  'la-grotte': laGrotte as BookProps,
  'test-book': testBook as BookProps,
}

export const listBooks = async () =>
  Object.entries(BOOKS).map(([id, book]) => ({
    name: book.title,
    text: book.description,
    reference: id,
  }))

export const getBook = async (id: string): Promise<BookProps> => BOOKS[id]
export const getScenes = async (id: string): Promise<ScenesProps> =>
  BOOKS[id].scenes
export const getIntroduction = async (
  id: string,
): Promise<BookIntroductionProps> => BOOKS[id].introduction
