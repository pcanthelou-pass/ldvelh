import { TEST_BOOK } from '@helpers/TEST_BOOK'
import { renderHook } from '@testing-library/react-native'
import { act } from 'react'
import { useGameStore } from '../useGameStore'

describe('Store in Core', () => {
  it('should be able to use the store with a selector', async () => {
    const { result } = renderHook(() =>
      useGameStore((state) => state.bookIntro),
    )

    expect(result.current).toHaveProperty('title')
  })

  it('should be able to use the store with another selector', async () => {
    const { result: setbook } = renderHook(() =>
      useGameStore((state) => state.setBook),
    )
    const { result: intro } = renderHook(() =>
      useGameStore((state) => state.bookIntro),
    )

    act(() => {
      setbook.current({ id: 'TEST_BOOK', intro: TEST_BOOK.introduction })
    })

    expect(intro.current).toHaveProperty('title')
  })
})
