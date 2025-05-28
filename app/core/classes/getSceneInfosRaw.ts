import { Scene } from '@core'
import { SceneInfo } from './SceneInfo'

/**
 * Renvoie, pour la scène `sceneId`, la liste des transitions possibles.
 * - Si la scène n'existe pas, retourne null.
 * - Si nextIds est vide (scène de fin), retourne un tableau vide.
 */

export function getSceneInfosRaw(
  sceneId: string,
  scenes: Record<string, Scene>,
): SceneInfo[] | null {
  const scene = scenes[sceneId]
  if (!scene) return null

  return scene.nextIds.map((nextId) => {
    const nextScene = scenes[nextId]
    return {
      dest: nextId,
      question: nextScene ? nextScene.question : 'Unknown scene',
    }
  })
}
