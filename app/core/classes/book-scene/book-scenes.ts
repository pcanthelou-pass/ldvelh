import { BookScene, EmptyBookScene, SceneKey } from './book-scene'
import { SceneBuilder } from './scene-builder'
import { RawBookSceneType } from './types'

export type ScenesRecord = Record<SceneKey, BookScene>

export class BookScenes {
  static fromRawBookType(
    rawBookScenes: Record<string, RawBookSceneType>,
  ): BookScenes {
    const t = new BookScenes({})
    if (rawBookScenes) {
      Object.values(rawBookScenes).forEach((raw) => {
        t.addRaw(raw as unknown as RawBookSceneType, rawBookScenes)
      })
    }

    return t
  }

  scenes: ScenesRecord

  constructor({ scenes }: { scenes?: ScenesRecord }) {
    this.scenes = scenes || { '': new EmptyBookScene() }
  }

  addRaw(
    raw: RawBookSceneType,
    rawBookScenes: Record<string, RawBookSceneType>,
  ) {
    this.scenes[raw.id] = SceneBuilder(raw.id, rawBookScenes, 0)
  }
  add(raw: RawBookSceneType) {
    this.scenes[raw.id] = SceneBuilder(raw.id, this.scenes, 0)
  }

  getScene(id: SceneKey) {
    return SceneBuilder(id, this.scenes, 1)
  }
}
