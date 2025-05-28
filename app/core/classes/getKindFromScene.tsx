import { SceneKey, SceneKind, Scenes } from '@core/classes'

export const getKindFromScene = (
  current: SceneKey,
  scenes: Scenes | null,
): SceneKind => {
  if (!scenes?.[current]) return 'empty'
  if (scenes[current].isEnding) return scenes[current]?.endingType ?? 'empty'
  if (scenes[current].opponent) return 'fight'
  return 'normal'
}
