import { useChooseSimpleStory } from '@core'
import { TEST_BOOK } from '@shared'
import { renderHook } from '@testing-library/react-native'
import { act } from 'react'
import { GAME_STORE } from '../useGameStore'

describe('useChooseSimpleStory', () => {
  it('returns the correct title and description', () => {
    const { result } = renderHook(() => useChooseSimpleStory())
    const { title, description, getSelectedBook } = result.current
    expect(title).toBe(TEST_BOOK.title)
    expect(description).toBe(TEST_BOOK.description)
    expect(getSelectedBook()).toEqual(TEST_BOOK)
  })
  it('calls setBook with the correct book', () => {
    const { result } = renderHook(() => useChooseSimpleStory())
    const { setBook } = result.current
    act(() => setBook(TEST_BOOK))
    expect(GAME_STORE.getState().gameBook).toEqual(TEST_BOOK)
  })
})
