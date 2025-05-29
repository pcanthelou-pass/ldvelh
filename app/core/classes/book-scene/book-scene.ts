import { Attacker } from '../attacker'

export type SceneKind = 'empty' | 'normal' | 'fight' | EndPoint

export type EndPoint = 'success' | 'failure'

export type SceneKey = string

export abstract class BookScene {
  protected _nextScenes: BookScene[] | null

  get nextScenes() {
    return this._nextScenes
  }

  id: SceneKey // identifiant unique
  question: string // titre / question
  text: string // texte de la scène
  nextIds?: string[] // liste d'id de la ou des scènes suivantes
  isEnding?: boolean // true si c'est une scène de fin
  endingType?: EndPoint
  opponent?: Attacker

  constructor({
    id,
    question,
    text,
    nextIds,
    isEnding,
    endingType,
    opponent,
  }: {
    id: SceneKey // identifiant unique
    question: string // titre / question
    text: string // texte de la scène
    nextIds?: string[] // liste d'id de la ou des scènes suivantes
    isEnding?: boolean // true si c'est une scène de fin
    endingType?: EndPoint
    opponent?: Attacker
  }) {
    this.id = id
    this.question = question
    this.text = text
    this.nextIds = nextIds ?? []
    this.isEnding = isEnding ?? false
    this.endingType = endingType ?? 'failure'
    this.opponent = opponent

    this._nextScenes = null
  }

  addNext(arg0: BookScene): void {
    this._nextScenes ??= []
    this._nextScenes.push(arg0)
  }

  setNextIds(nextIds: string[] | undefined) {
    this.nextIds = nextIds
  }
}

export class EmptyBookScene extends BookScene {
  constructor() {
    super({
      id: '',
      question: '',
      text: '',
    })
  }
}

export class NormalBookScene extends BookScene {
  constructor({
    id,
    question,
    text,
  }: {
    id: SceneKey // identifiant unique
    question: string // titre / question
    text: string // texte de la scène
  }) {
    super({
      id,
      question,
      text,
    })
  }
}
export class FightBookScene extends BookScene {
  constructor({
    id,
    question,
    text,
    opponent,
  }: {
    id: SceneKey // identifiant unique
    question: string // titre / question
    text: string // texte de la scène
    opponent: Attacker
  }) {
    super({
      id,
      question,
      text,
      opponent,
    })
  }
}

export class SuccessBookScene extends BookScene {
  constructor({
    id,
    question,
    text,
  }: {
    id: SceneKey // identifiant unique
    question: string // titre / question
    text: string // texte de la scène
  }) {
    super({
      id,
      question,
      text,
      isEnding: true,
      endingType: 'success',
    })
    this._nextScenes = null
  }
}
export class FailureBookScene extends BookScene {
  constructor({
    id,
    question,
    text,
  }: {
    id: SceneKey // identifiant unique
    question: string // titre / question
    text: string // texte de la scène
  }) {
    super({
      id,
      question,
      text,
      isEnding: true,
      endingType: 'failure',
    })
  }
}
