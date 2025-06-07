import { EmptyBook } from '@core'
import { TEST_BOOK } from '@shared'
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
