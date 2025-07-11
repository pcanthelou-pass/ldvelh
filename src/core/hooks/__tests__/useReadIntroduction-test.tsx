import { WrapperTestExt } from '@helpers/WrapperTestExt'
import { renderHook } from '@testing-library/react-native'
import { GAME_STORE } from '../useGameStore'
import { useReadIntroduction } from '../useReadIntroduction'

describe('useReadIntroduction', () => {
  it('should be able to load the default introduction', () => {
    const { result } = renderHook(() => useReadIntroduction())

    expect(result.current).toHaveProperty('title')
    expect(result.current).toHaveProperty('introduction')
    expect(result.current).toHaveProperty('startBook')
  })
  it('should return the correct title and introduction text', () => {
    const { result } = renderHook(() => useReadIntroduction(), {
      wrapper: WrapperTestExt,
    })

    expect(result.current.title).toBe('Mon livre introduction') // Assuming default title is 'Error'
    expect(result.current.introduction).toBeDefined()
  })
  it('should have a startBook function', () => {
    const { result } = renderHook(() => useReadIntroduction())

    expect(result.current).toHaveProperty('startBook')
    expect(typeof result.current.startBook).toBe('function')
  })
  it('should call startBook function', () => {
    GAME_STORE.getState().startBook = jest.fn()
    const { result } = renderHook(() => useReadIntroduction(), {
      wrapper: WrapperTestExt,
    })
    expect(result.current.startBook).toBeDefined()
    result.current.startBook()
    expect(GAME_STORE.getState().startBook).toHaveBeenCalledTimes(1)
  })
})
