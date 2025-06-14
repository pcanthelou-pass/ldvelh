// src/core/hooks/useChooseStory.ts
import { BookProps, useGameStore } from '@core'
import { useEffect, useState } from 'react'
import { getBooks } from '../api/getBooks'

export function useChooseStory(filename: 'TEST_BOOK' | 'LA_GROTTE') {
  const setBook = useGameStore((s) => s.setBook)
  const [bookState, setBookState] = useState<BookProps | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (getBooks(filename)) {
      setBookState(getBooks(filename))
      setLoading(false)
    }
  }, [filename])

  return {
    title: bookState?.title ?? '',
    description: bookState?.description ?? '',
    getSelectedBook: () => bookState,
    setBook,
    loading,
  }
}
