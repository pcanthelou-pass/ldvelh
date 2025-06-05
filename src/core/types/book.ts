import {
  BookIntroductionProps,
  EmptyBookIntroduction,
} from '@/src/core/types/introduction'
import { EmptyScenes, ScenesProps } from '@/src/core/types/scenes'

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
