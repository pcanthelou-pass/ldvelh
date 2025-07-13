import { getBooks } from '@api'
import { ShortStory } from '@types'

export const bookService = {
  async getBookMetaList(): Promise<ShortStory[]> {
    const books = await getBooks()
    return books.map((b, index) => ({
      name: b.title,
      text: b.description,
      reference: index,
    }))
  },
}
