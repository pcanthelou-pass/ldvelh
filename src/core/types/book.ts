import { BookIntroductionProps, EmptyBookIntroduction } from './introduction'
import { EmptyScenes, ScenesProps } from './scenes'

export type BookProps = {
  title: string
  description: string
  introduction: BookIntroductionProps
  scenes: ScenesProps
}

export const EmptyBook: BookProps = {
  title: '',
  description: '',
  introduction: EmptyBookIntroduction,
  scenes: EmptyScenes,
}
