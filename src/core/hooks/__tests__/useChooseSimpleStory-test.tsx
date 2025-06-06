import { EmptyBook } from '@/src/core/types/book'
import { TEST_BOOK } from '@/src/shared'
import { act, renderHook } from '@testing-library/react-native'
import { useChooseStory } from '../useChooseSimpleStory'

describe('useChooseSimpleStory', () => {
  it('can set a book', () => {
    const { result } = renderHook(() => useChooseStory())
    expect(result.current.gameBook).toBe(EmptyBook)
    act(() => result.current.setBook(TEST_BOOK))
    expect(result.current.gameBook).toBe(TEST_BOOK)
  })
})
