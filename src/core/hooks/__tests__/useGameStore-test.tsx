import { useGameStore } from '@core'
import { TEST_BOOK } from '@shared'
import { renderHook } from '@testing-library/react-native'
import { act } from 'react'

describe('Store in Core', () => {
  it('should be able to use the store with a selector', async () => {
    const { result } = renderHook(() => useGameStore((state) => state.gameBook))

    expect(result.current).toHaveProperty('title')
  })

  it('should be able to use the store with another selector', async () => {
    const { result: setbook } = renderHook(() =>
      useGameStore((state) => state.setBook),
    )
    const { result: book } = renderHook(() =>
      useGameStore((state) => state.gameBook),
    )

    act(() => {
      setbook.current(TEST_BOOK)
    })

    expect(book.current).toHaveProperty('title')
  })
})
