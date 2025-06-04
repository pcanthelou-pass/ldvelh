import {
  BookIntroductionProps,
  EmptyBookIntroduction,
} from '@core/types/introduction'
import { EmptyScenes, ScenesProps } from '@core/types/scenes'

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
