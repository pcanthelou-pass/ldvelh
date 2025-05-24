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
  it('can keep the reading order in the book if a bad key is given', () => {
    const { result } = renderHook(() => useReadScene('7-1', scenes))
    expect(result.current.sceneText).toBe('')
    expect(result.current.actions).toStrictEqual(null)
  })
  it('knows it is not the end', () => {
    const { result } = renderHook(() => useReadScene('2-1', scenes))
    expect(result.current.kind).toBe('normal')
    expect(result.current.actions).not.toStrictEqual([])
  })
  it('knows it is the end and a success', () => {
    const { result } = renderHook(() => useReadScene('3-1', scenes))
    expect(result.current.kind).toBe('success')
    expect(result.current.actions).toStrictEqual([])
  })
  it('knows it is the end and a failure', () => {
    const { result } = renderHook(() => useReadScene('2-2', scenes))
    expect(result.current.kind).toBe('failure')
    expect(result.current.actions).toStrictEqual([])
  })
})
