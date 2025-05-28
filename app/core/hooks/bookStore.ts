import { BookSlice } from '@core'
import { useZeStore } from './genericStore'

export function useBookStore(
  selector?: (state: BookSlice) => BookSlice,
): BookSlice {
  return useZeStore<BookSlice>(selector)
}
