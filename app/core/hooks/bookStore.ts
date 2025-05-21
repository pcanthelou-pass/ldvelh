import { BookSlice, Scenes } from '../slices/book'
import { useZeStore } from './genericStore'

export type ScenePathwayQuestion = { question: string }

export type ScenePathway = Record<string, ScenePathwayQuestion>

export const getSceneInfosRaw = (
  scene: string,
  scenes: Scenes,
): ScenePathway =>
  scenes?.[scene]
    ? Object.keys(scenes?.[scene]?.next).map((key) => ({
        dest: key,
        question: scenes?.[scene]?.next[key]?.question,
      }))
    : null

export function useBookStore(
  selector?: (state: BookSlice) => BookSlice,
): BookSlice {
  return useZeStore<BookSlice>(selector)
}
