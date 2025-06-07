import { AttackerProps } from './attacker'

export type EndingTypeProps = 'failure' | 'success'

export type SceneProps = {
  id: string
  question: string
  text: string
  nextIds: string[]
  isEnding?: boolean
  endingType?: EndingTypeProps
  opponent?: AttackerProps
}

export const EmptyScene: SceneProps = {
  id: '0',
  question: '',
  text: '',
  nextIds: [],
  isEnding: true,
  endingType: 'success',
}

export interface SceneAction {
  dest: string
  label: string
}

export interface SceneActions {
  actions: SceneAction[]
}

export type Scene = SceneProps & SceneActions
