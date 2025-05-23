import { Scenes } from '@core'
import { TEST_BOOK } from '@shared/helpers'
import { renderHook } from '@testing-library/react-native'
import { useReadScene } from '../hooks'

describe('useReadScene', () => {
  const scenes: Scenes = TEST_BOOK.scenes
  it('can read an empty scene', () => {
    const { result } = renderHook(() => useReadScene('', null))
    expect(result.current.sceneText).toBe('')
    expect(result.current.actions).toBe(undefined)
  })
  it('can read an empty scene with good key', () => {
    const { result } = renderHook(() => useReadScene('1', null))
    expect(result.current.sceneText).toBe('')
    expect(result.current.actions).toBe(undefined)
  })
  it('can read an scene without a good key', () => {
    const { result } = renderHook(() => useReadScene('', scenes))
    expect(result.current.sceneText).toBe('')
    expect(result.current.actions).toBeNull()
  })
  it('can read an scene with good key', () => {
    const { result } = renderHook(() => useReadScene('1', scenes))
    expect(result.current.sceneText).toBe(TEST_BOOK.scenes['1']?.text)
    expect(result.current.actions).toStrictEqual([
      { dest: '1-1', question: 'Scène #1-1' },
      { dest: '1-2', question: 'Scène #1-2' },
    ])
  })
  it('can read an inside scene with good key', () => {
    const { result } = renderHook(() => useReadScene('1-1', scenes))
    expect(result.current.sceneText).toBe(TEST_BOOK.scenes['1-1']?.text)
    expect(result.current.actions).toStrictEqual([
      { dest: '2-1', question: 'Scène #2-1' },
      { dest: '2-2', question: 'Scène #2-2' },
    ])
  })
})
