import rawBook1 from '../../../assets/books/la-grotte.json'
import rawBook2 from '../../../assets/books/TEST_BOOK.json'
import { BookProps } from '../types/book'

export const getBooks = (): BookProps[] => [rawBook1, rawBook2]
