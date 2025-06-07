import { BuildAttacker, Scene, SceneAction, ScenesProps } from '@core'

const BuildSceneActions = (ids: string[], scenes: ScenesProps): SceneAction[] =>
  ids
    .filter((key) => !!scenes[key])
    .map((id: string) => ({
      dest: scenes[id].id,
      label: scenes[id].question,
    }))

export const BuildScene = (current: string, scenes: ScenesProps): Scene => {
  if (!scenes?.[current]) throw new Error('page manquante')

  if (scenes[current].isEnding && scenes[current].endingType === 'success')
    return {
      ...scenes[current],
      actions: [],
    }

  if (scenes[current].isEnding && scenes[current].endingType === 'failure')
    return {
      ...scenes[current],
      actions: [],
    }

  if (scenes[current].opponent)
    return {
      ...scenes[current],
      opponent: BuildAttacker(scenes[current].opponent),
      actions: BuildSceneActions(scenes[current].nextIds, scenes),
    }

  return {
    ...scenes[current],
    actions: BuildSceneActions(scenes[current].nextIds, scenes),
  }
}
