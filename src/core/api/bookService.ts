import path from 'path'
import { promises as fs } from 'fs'
import type { ShortStory, BookIntroductionProps, SceneProps, BookProps } from '.../types'

const BOOKS_DIR = path.join(__dirname, '../../../assets/books')

const loadBook = async (id: string): Promise<BookProps> => {
  const mod = await import(`../../../assets/books/${id}.json`)
  return mod.default as BookProps
}

const listBookIds = async (): Promise<string[]> => {
  const files = await fs.readdir(BOOKS_DIR)
  return files
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace(/\.json$/, ''))
}

export const getBookMetaList = async (): Promise<ShortStory[]> => {
  const ids = await listBookIds()
  const books = await Promise.all(ids.map((id) => loadBook(id)))

  return books.map((b, index) => ({
    name: b.title,
    text: b.description,
    reference: ids[index],
  }))
}

export const getBookIntro = async (
  id: string,
): Promise<BookIntroductionProps> => {
  const book = await loadBook(id)
  return book.introduction
}

export const getScene = async (
  id: string,
  sceneId: string,
): Promise<SceneProps> => {
  const book = await loadBook(id)
  return book.scenes[sceneId]
}
