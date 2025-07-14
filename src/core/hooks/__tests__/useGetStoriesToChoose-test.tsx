import { listBooks } from '../../../shared/services/bookService'
import { TEST_BOOK } from '@helpers/TEST_BOOK'
import { WrapperTest } from '@helpers/WrapperTest'
import { act, renderHook, waitFor } from '@testing-library/react-native'
import { useGetStoriesToChoose } from '../useGetStoriesToChoose'
import { ShortStory } from '@types'

jest.mock('../../../shared/services/bookService')

const shortList: ShortStory[] = [
  {
    name: 'Les mésaventures de Grok, gobelin maladroit',
    text: 'Un jeune gobelin voleur tente désespérément de rejoindre son père perdu dans la forêt sauvage.',
    reference: 0,
  },
  {
    name: TEST_BOOK.title,
    text: TEST_BOOK.description,
    reference: 1,
  },
]
describe('useGetStoriesToChoose', () => {
  it('should start with loading state', async () => {
    const { result } = renderHook(() => useGetStoriesToChoose(listBooks), {
      wrapper: WrapperTest,
    })

    expect(result.current.loading).toBe(false)

    await act(async () => {
      result.current.load()
    })

    expect(result.current.loading).toBe(false)
  })

  it('should handle loading state correctly', async () => {
    const { result } = renderHook(() => useGetStoriesToChoose(listBooks), {
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
    const { result } = renderHook(() => useGetStoriesToChoose(listBooks), {
      wrapper: WrapperTest,
    })
    await act(async () => {
      result.current.load()
    })
    await waitFor(() => {
      expect(result.current.books).toEqual(shortList)
    })
  })
  it('should handle empty books array', async () => {
    const { result } = renderHook(() => useGetStoriesToChoose(listBooks), {
      wrapper: WrapperTest,
    })
    await waitFor(() => {
      expect(result.current.books).toEqual([])
      expect(result.current.loading).toBe(false)
    })
  })
  it('Should set the book selected by a key', async () => {
    const { result } = renderHook(() => useGetStoriesToChoose(listBooks), {
      wrapper: WrapperTest,
    })
    await act(async () => {
      result.current.load()
    })
    await waitFor(async () => {
      expect(result.current.loading).toBe(false)
    })
    const b = await result.current.selectBook(1)
    expect(b).toStrictEqual(shortList[1])
  })
  it('Should raise an error if book getter is wrong', async () => {
    const { result } = renderHook(
      () =>
        useGetStoriesToChoose(() => {
          throw Error('test')
        }),
      {
        wrapper: WrapperTest,
      },
    )
    await act(async () => {
      result.current.load()
    })
    await waitFor(async () => {
      expect(result.current.loading).toBe(false)
    })
    expect(result.current.error.message).toBe('test')
  })
})
