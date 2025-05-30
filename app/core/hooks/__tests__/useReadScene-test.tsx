import {
  BookScenes,
  FailureBookScene,
  NormalBookScene,
  SuccessBookScene,
} from '@core'
import { TEST_BOOK } from '@shared'

describe('useReadScene', () => {
  const scenes = BookScenes.fromRawBookType(TEST_BOOK.scenes)
  it('can read an empty scene', () => {
    const scene = scenes.getScene('')
    expect(scene.text).toBe('')
    expect(scene.nextSceneActions.actions).toStrictEqual(null)
  })
  it('can read an scene without a good key', () => {
    const scene = scenes.getScene('22')
    expect(scene.text).toBe('')
    expect(scene.nextSceneActions.actions).toStrictEqual(null)
  })
  it('can read an scene with good key', () => {
    const scene = scenes.getScene('1')
    expect(scene.text).toBe(TEST_BOOK.scenes['1']?.text)
    expect(scene.nextSceneActions.actions).toStrictEqual([
      { dest: '1-1', question: 'Scène #1-1' },
      { dest: '1-2', question: 'Scène #1-2' },
      { dest: '1-3', question: 'Scène #1-3' },
    ])
  })
  it('can read an inside scene with good key', () => {
    const scene = scenes.getScene('1-1')
    expect(scene.text).toBe(TEST_BOOK.scenes['1-1']?.text)
    expect(scene.nextSceneActions.actions).toStrictEqual([
      { dest: '2-1', question: 'Scène #2-1' },
      { dest: '2-2', question: 'Scène #2-2' },
    ])
  })
  it('can keep the reading order in the book if a bad key is given', () => {
    const scene = scenes.getScene('7-1')
    expect(scene.text).toBe('')
    expect(scene.nextSceneActions.actions).toStrictEqual(null)
  })
  it('knows it is not the end', () => {
    const scene = scenes.getScene('2-1')
    expect(scene instanceof NormalBookScene).toBeTruthy()
    expect(scene instanceof SuccessBookScene).toBeFalsy()
    expect(scene.nextSceneActions.actions).not.toStrictEqual([])
  })
  it('knows it is the end and a success', () => {
    const scene = scenes.getScene('3-1')
    expect(scene instanceof SuccessBookScene).toBeTruthy()
    expect(scene.nextSceneActions.actions).toStrictEqual(null)
  })
  it('knows it is the end and a failure', () => {
    const scene = scenes.getScene('2-2')
    expect(scene instanceof FailureBookScene).toBeTruthy()
    expect(scene.nextSceneActions.actions).toStrictEqual(null)
  })
})
