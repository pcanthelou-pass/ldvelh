import rawBook1 from '../../../assets/books/la-grotte.json'
import rawBook2 from '../../../assets/books/TEST_BOOK.json'

export const getBooks = (key: string) => {
  const allBooks = {
    LA_GROTTE: rawBook1,
    TEST_BOOK: rawBook2,
  }

  return allBooks?.[key] ?? allBooks['TEST_BOOK']
}
