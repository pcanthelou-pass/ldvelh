import { TEST_BOOK } from '@helpers/TEST_BOOK'
import { renderHook, waitFor } from '@testing-library/react-native'
import { act } from 'react'
import { useChooseSimpleStory } from '../useChooseSimpleStory'
import { useGameStoreApi } from '../useGameStore'

jest.mock('../../../shared/services/bookService', () => {
  const { TEST_BOOK } = jest.requireActual('@helpers/TEST_BOOK')
  return {
    bookService: {
      getBookMetaList: jest
        .fn()
        .mockResolvedValue([
          { name: TEST_BOOK.title, text: TEST_BOOK.description, reference: 0 },
        ]),
    },
  }
})

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
    const { result } = renderHook(() => useChooseSimpleStory(), {
      wrapper: WrapperTest,
    })
    const { result: api } = renderHook(() => useGameStoreApi(), {
      wrapper: WrapperTest,
    })
    const { setBook } = result.current
    act(() => setBook({ id: 'TEST_BOOK', intro: TEST_BOOK.introduction }))
    expect(GAME_STORE.getState().bookIntro).toEqual(TEST_BOOK.introduction)
  })
})
