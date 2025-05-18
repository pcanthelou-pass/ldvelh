import { BookSlice } from '../slices/book';
import { useZeStore } from './generic-store';

export function useBookStore(
  selector?: (state: BookSlice) => BookSlice
): BookSlice {
  return useZeStore<BookSlice>(selector);
}
