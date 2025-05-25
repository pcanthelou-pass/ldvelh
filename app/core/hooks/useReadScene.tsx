import { SceneKey, Scenes, getSceneInfosRaw } from '@core'
import { SceneInfo } from '@core/hooks/bookStore'

export type SceneKind = 'empty' | 'normal' | 'success' | 'failure' | 'fight'

export interface UseReadSceneHook {
  actions: SceneInfo[] | null | undefined
  sceneText: string
  kind: SceneKind
}

export const getKindFromScene = (
  current: SceneKey,
  scenes: Scenes | null,
): SceneKind => {
  if (!scenes?.[current]) return 'empty'
  if (scenes[current].isEnding) return scenes[current]?.endingType ?? 'empty'
  if (scenes[current].opponent) return 'fight'
  return 'normal'
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
