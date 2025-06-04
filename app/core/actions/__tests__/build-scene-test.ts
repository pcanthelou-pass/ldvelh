import { EmptyScenes } from '@core/types/scenes'
import { TEST_BOOK } from '@shared'
import { BuildScene } from '../build-scene'

describe('BuildScene', () => {
  it('Build empty scenes', () => {
    try {
      const scenes = BuildScene('0', EmptyScenes)
    } catch (e) {
      expect(e).toBeDefined()
    }
  })

  it('can read scene 1', () => {
    try {
      const scene = BuildScene('1', TEST_BOOK.scenes)
      expect(scene).toHaveProperty('actions')
      expect(scene).toHaveProperty('id')
      expect(scene).toHaveProperty('question')
      expect(scene).toHaveProperty('text')
      expect(scene).toHaveProperty('nextIds')
      expect(scene).not.toHaveProperty('isEnding')
      expect(scene).not.toHaveProperty('endingType')
      expect(scene).not.toHaveProperty('opponent')
    } catch (e) {
      expect(e).not.toBeDefined()
    }
  })

  it('can build next dest scenes', () => {
    const scene = BuildScene('1', TEST_BOOK.scenes)
    expect(scene.actions).toStrictEqual([
      { dest: '1-1', label: 'Scène #1-1' },
      { dest: '1-2', label: 'Scène #1-2' },
      { dest: '1-3', label: 'Scène #1-3' },
    ])
  })

  it('can build a failing scene', () => {
    const scene = BuildScene('1-2', TEST_BOOK.scenes)
    expect(scene).toHaveProperty('isEnding')
    expect(scene.isEnding).toBeTruthy()
    expect(scene).toHaveProperty('endingType')
    expect(scene.endingType).toBe('failure')
    expect(scene.actions).toStrictEqual([])
  })

  it('can build a success scene', () => {
    const scene = BuildScene('3-1', TEST_BOOK.scenes)
    expect(scene).toHaveProperty('isEnding')
    expect(scene.isEnding).toBeTruthy()
    expect(scene).toHaveProperty('endingType')
    expect(scene.endingType).toBe('success')
    expect(scene.actions).toStrictEqual([])
  })

  it('can build a fighting scene', () => {
    const scene = BuildScene('1-3', TEST_BOOK.scenes)
    expect(scene).toHaveProperty('opponent')
    expect(scene.opponent).toHaveProperty('name')
    expect(scene.opponent).toHaveProperty('abilities')
    expect(scene.opponent).toHaveProperty('hit')
    expect(scene.opponent).toHaveProperty('attack')
  })
})
