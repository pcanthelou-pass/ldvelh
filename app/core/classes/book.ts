import { BookScenes, RawBookType } from '@core'

export interface BookIntroduction {
  title: string
  text: string
}

export const EmptyBookIntroduction: BookIntroduction = {
  title: '',
  text: '',
}

export interface Book {
  title: string
  description: string
  introduction: BookIntroduction
  scenes: BookScenes | null
}

export const EmptyBook: Book = {
  title: '',
  description: '',
  introduction: EmptyBookIntroduction,
  scenes: null,
}

export const fromRawBook = (book: RawBookType): Book => {
  const newBook: Book = {
    title: book.title,
    description: book.description,
    introduction: {
      title: book.introduction.title,
      text: book.introduction.text,
    } as BookIntroduction,
    scenes: book.scenes ? BookScenes.fromRawBookType(book.scenes) : {},
  } as Book
  return newBook
}
