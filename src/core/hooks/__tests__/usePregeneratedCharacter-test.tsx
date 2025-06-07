import { renderHook } from '@testing-library/react-native'
import { useGameStore } from '../useGameStore'
import { usePregeneratedCharacter } from '../usePregeneratedCharacter'

describe('usePregeneratedCharacter', () => {
  it('should load the default character', () => {
    const { result } = renderHook(() =>
      useGameStore((state) => state.character),
    )

    expect(result.current.name).not.toBe('Mon héro')

    renderHook(() => usePregeneratedCharacter())

    expect(result.current.name).toBe('Mon héro')
    expect(result.current.items[0]).toHaveProperty('name')
  })
})
