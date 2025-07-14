import { TEST_BOOK } from '@helpers/TEST_BOOK'
import { renderHook } from '@testing-library/react-native'
import { WrapperTest } from '@helpers/WrapperTest'
import { act } from 'react'
import { useChooseSimpleStory } from '../useChooseSimpleStory'
import { useGameStoreApi } from '../useGameStore'

describe('useChooseSimpleStory', () => {
  it('returns the correct title and description', () => {
    const { result } = renderHook(() => useChooseSimpleStory(), {
      wrapper: WrapperTest,
    })
    const { title, description, getSelectedBook } = result.current
    expect(title).toBe(TEST_BOOK.title)
    expect(description).toBe(TEST_BOOK.description)
    expect(getSelectedBook()).toEqual(TEST_BOOK)
  })
  it('calls setBook with the correct book', () => {
    const { result } = renderHook(() => useChooseSimpleStory(), {
      wrapper: WrapperTest,
    })
    const { result: api } = renderHook(() => useGameStoreApi(), {
      wrapper: WrapperTest,
    })
    const { setBook } = result.current
    act(() => setBook(TEST_BOOK))
    expect(api.current.gameBook).toEqual(TEST_BOOK)
  })
})
