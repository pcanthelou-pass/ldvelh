import { TEST_BOOK } from '@helpers/TEST_BOOK'
import { ShortStory } from '@types'
import { bookService } from '@services/bookService'
import { useGameStore } from './useGameStore'
import { useEffect, useState } from 'react'

export const useChooseSimpleStory = () => {
  const [meta, setMeta] = useState<ShortStory | null>(null)
  const storeSetBook = useGameStore((state) => state.setBook)

  useEffect(() => {
    bookService
      .getBookMetaList()
      .then((list) => {
        if (list.length > 0) setMeta(list[0])
      })
      .catch(() => {})
    // we ignore the error here on purpose
  }, [])

  const getSelectedBook = () => TEST_BOOK

  const setBook = ({ id, intro }: { id: string | number; intro: string }) => {
    // store only minimal information as requested
    storeSetBook({ id, intro } as any)
  }

  const title = meta?.name ?? getSelectedBook().title
  const description = meta?.text ?? getSelectedBook().description

  return { title, description, getSelectedBook, setBook }
}
