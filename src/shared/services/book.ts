import { BuildScene } from '@actions'
import TEST_BOOK from '@assets/books/TEST_BOOK.json'
import LA_GROTTE from '@assets/books/la-grotte.json'
import { Scene } from '@types'

type RawBook = { scenes: Record<string, any> }

const BOOKS: Record<string, RawBook> = {
  TEST_BOOK: TEST_BOOK as RawBook,
  'la-grotte': LA_GROTTE as RawBook,
  '0': LA_GROTTE as RawBook,
  '1': TEST_BOOK as RawBook,
}

export const bookService = {
  getScene(bookId: string, sceneId: string): Scene {
    const book = BOOKS[bookId]
    if (!book) throw new Error('book not found')
    return BuildScene(sceneId, book.scenes as any)
  },
}
