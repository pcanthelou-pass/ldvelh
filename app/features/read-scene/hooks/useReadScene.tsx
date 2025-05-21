import { SceneKey, Scenes, getSceneInfosRaw } from '@core'

export const useReadScene = (current: SceneKey, scenes: Scenes | null) => {
  if (scenes !== null) {
    const waypoints = getSceneInfosRaw(current, scenes)
    return { actions: waypoints, sceneText: scenes[current]?.text ?? '' }
  } else {
    return { actions: undefined, sceneText: '' }
  }
}
