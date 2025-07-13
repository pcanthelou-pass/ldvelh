import { TEST_BOOK } from '@helpers/TEST_BOOK'
import { renderHook, waitFor } from '@testing-library/react-native'
import { act } from 'react'
import { useChooseSimpleStory } from '../useChooseSimpleStory'
import { GAME_STORE } from '../useGameStore'
import { bookService } from '@services/bookService'

jest.mock('@services/bookService', () => ({
  bookService: {
    getBookMetaList: jest.fn().mockResolvedValue([
      { name: TEST_BOOK.title, text: TEST_BOOK.description, reference: 0 },
    ]),
  },
}))

describe('useChooseSimpleStory', () => {
  it('returns the correct title and description', async () => {
    const { result } = renderHook(() => useChooseSimpleStory())

    await waitFor(() => {
      expect(result.current.title).toBe(TEST_BOOK.title)
      expect(result.current.description).toBe(TEST_BOOK.description)
    })
    expect(result.current.getSelectedBook()).toEqual(TEST_BOOK)
  })

  it('calls setBook with the correct book', () => {
    const { result } = renderHook(() => useChooseSimpleStory())
    const { setBook } = result.current
    act(() => setBook(TEST_BOOK, 'book1'))
    expect(GAME_STORE.getState().bookId).toBe('book1')
    expect(GAME_STORE.getState().scenes).toEqual(TEST_BOOK.scenes)
  })
})
