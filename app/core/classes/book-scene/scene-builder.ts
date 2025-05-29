import { Attacker } from '../attacker'
import {
  BookScene,
  EmptyBookScene,
  FailureBookScene,
  FightBookScene,
  NormalBookScene,
  SceneKey,
  SuccessBookScene,
} from './book-scene'
import { ScenesRecord } from './book-scenes'
import { RawBookSceneType } from './types'

export const SceneBuilder = (
  current: SceneKey,
  scenes: ScenesRecord | Record<string, RawBookSceneType>,
  depth: number = 1,
): BookScene => {
  if (!scenes?.[current]) return new EmptyBookScene()

  if (scenes[current].isEnding && scenes[current].endingType === 'success')
    return new SuccessBookScene({
      id: scenes[current].id,
      question: scenes[current].question,
      text: scenes[current].text,
    })

  if (scenes[current].isEnding && scenes[current].endingType === 'failure')
    return new FailureBookScene({
      id: scenes[current].id,
      question: scenes[current].question,
      text: scenes[current].text,
    })

  if (scenes[current].opponent) {
    const scene = new FightBookScene({
      id: scenes[current].id,
      question: scenes[current].question,
      text: scenes[current].text,
      opponent: new Attacker({ ...scenes[current].opponent }),
    })
    scene.setNextIds(scenes[current].nextIds)
    if (depth > 0) {
      scenes[current].nextIds?.forEach((sceneId) =>
        scene.addNext(SceneBuilder(sceneId, scenes, --depth)),
      )
    }

    return scene
  }
  const scene = new NormalBookScene({
    id: scenes[current].id,
    question: scenes[current].question,
    text: scenes[current].text,
  })
  scene.setNextIds(scenes[current].nextIds)
  if (depth > 0) {
    scenes[current].nextIds?.forEach((sceneId) =>
      scene.addNext(SceneBuilder(sceneId, scenes, --depth)),
    )
  }
  return scene
}
