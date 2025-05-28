import {
  SceneInfo,
  SceneKey,
  SceneKind,
  Scenes,
  getKindFromScene,
  getSceneInfosRaw,
} from '@core'

export interface UseReadSceneHook {
  actions: SceneInfo[] | null | undefined
  sceneText: string
  kind: SceneKind
}

export const useReadScene = (
  current: SceneKey,
  scenes: Scenes | null,
): UseReadSceneHook => {
  if (scenes !== null) {
    const waypoints = getSceneInfosRaw(current, scenes)
    return {
      actions: waypoints,
      sceneText: scenes[current]?.text ?? '',
      kind: getKindFromScene(current, scenes),
    }
  } else {
    return { actions: undefined, sceneText: '', kind: 'empty' }
  }
}
