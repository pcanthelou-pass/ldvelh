export type RawBookSceneType = {
  id: string
  question: string
  text: string
  nextIds: string[]
  isEnding?: boolean
  endingType?: 'failure' | 'success'
  opponent?: {
    description: string
    name: string
    abilities: { agility: number; endurance: number; chance: number }
  }
}

export const EmptyRawBook: RawBookType = {
  title: '',
  description: '',
  introduction: { title: '', text: '' },
  scenes: {},
}

export type RawBookType = {
  title: string
  description: string
  introduction: { title: string; text: string }
  scenes: Record<string, RawBookSceneType>
}
