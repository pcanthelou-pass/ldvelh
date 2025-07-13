import { TEST_BOOK } from '@helpers/TEST_BOOK'
import { renderHook } from '@testing-library/react-native'
import { WrapperTest } from '@helpers/WrapperTest'
import { act } from 'react'
import { useGameStore } from '../useGameStore'

describe('Store in Core', () => {
  it('should be able to use the store with a selector', async () => {
    const { result } = renderHook(() => useGameStore((state) => state.gameBook), {
      wrapper: WrapperTest,
    })

    expect(result.current).toHaveProperty('title')
  })

  it('should be able to use the store with another selector', async () => {
    const { result: setbook } = renderHook(
      () => useGameStore((state) => state.setBook),
      { wrapper: WrapperTest },
    )
    const { result: book } = renderHook(
      () => useGameStore((state) => state.gameBook),
      { wrapper: WrapperTest },
    )

    act(() => {
      setbook.current(TEST_BOOK)
    })

    expect(book.current).toHaveProperty('title')
  })
})
