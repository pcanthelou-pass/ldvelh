import { WrapperTest } from '@shared'
import { act, renderHook, waitFor } from '@testing-library/react-native'
import { useGetStoriesToChoose } from '../useGetStoriesToChoose'

describe('useGetStoriesToChoose', () => {
  it('should start with loading state', async () => {
    const { result } = renderHook(() => useGetStoriesToChoose(), {
      wrapper: WrapperTest,
    })

    expect(result.current.loading).toBe(false)

    await act(async () => {
      result.current.load()
    })

    expect(result.current.loading).toBe(false)
  })

  it('should handle loading state correctly', async () => {
    const { result } = renderHook(() => useGetStoriesToChoose(), {
      wrapper: WrapperTest,
    })
    await act(async () => {
      result.current.load()
    })
    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })
  })
  it('should format books data correctly', async () => {
    const { result } = renderHook(() => useGetStoriesToChoose(), {
      wrapper: WrapperTest,
    })
    await act(async () => {
      result.current.load()
    })
    await waitFor(() => {
      expect(result.current.books).toEqual([
        {
          name: 'Les mésaventures de Grok, gobelin maladroit',
          text: 'Un jeune gobelin voleur tente désespérément de rejoindre son père perdu dans la forêt sauvage.',
          reference: 0,
        },
        {
          name: 'Fugiat ipsum sunt cupidatat cillum duis eiusmod adipisicing excepteur quis',
          text: 'Fugiat ipsum sunt cupidatat cillum duis eiusmod adipisicing excepteur quis Lorem proident ut eu labore.',
          reference: 1,
        },
      ])
    })
  })
  it('should handle empty books array', async () => {
    const { result } = renderHook(() => useGetStoriesToChoose(), {
      wrapper: WrapperTest,
    })
    await waitFor(() => {
      expect(result.current.books).toEqual([])
      expect(result.current.loading).toBe(false)
    })
  })
})
