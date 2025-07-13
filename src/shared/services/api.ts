import book1 from '@assets/books/la-grotte.json'
import book2 from '@assets/books/TEST_BOOK.json'
import character from 'src/core/api/character.json'
import { BookProps, CharacterRawProps } from '@types'

export class ApiService {
  async getBooks(): Promise<BookProps[]> {
    return [book1 as BookProps, book2 as BookProps]
  }

  async getPregeneratedCharacter(): Promise<CharacterRawProps> {
    return character.character as unknown as CharacterRawProps
  }
}
