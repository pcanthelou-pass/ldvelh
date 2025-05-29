import {
  BookScene,
  BookScenes,
  EmptyBookScene,
  RawBookSceneType,
  SceneKey,
} from '@core'

export interface UseReadSceneHook {
  actions: any[] | null | undefined
  scene: BookScene
}

export const useReadScene = (
  current: SceneKey,
  scenes: Record<string, RawBookSceneType> | null,
): UseReadSceneHook => {
  if (scenes !== null && current !== '') {
    const scene = BookScenes.fromRawBookType(scenes).getScene(current)
    return {
      actions:
        scene.nextScenes?.map((next) => ({
          dest: next.id,
          question: next.question,
        })) ?? null,
      scene: scene,
    }
  } else {
    return { actions: null, scene: new EmptyBookScene() }
  }
}
