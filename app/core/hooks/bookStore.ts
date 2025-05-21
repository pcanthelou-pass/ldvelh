import { Book, BookSlice } from '../slices/book'
import { useZeStore } from './genericStore'

export type ScenePathwayQuestion = { question: string }

export type ScenePathway = Record<string, ScenePathwayQuestion>

export const rawGetSceneInfos = (scene: string, book: Book): ScenePathway =>
  Object.keys(book?.scenes?.[scene]?.next).map((key) => ({
    dest: key,
    question: book?.scenes?.[scene]?.next[key]?.question,
  }))

export function useBookStore(
  selector?: (state: BookSlice) => BookSlice,
): BookSlice {
  return useZeStore<BookSlice>(selector)
}
