import { Attacker, EndPoint } from '@core/classes'

export type SceneKey = string

// Une scène « plate » :
export interface Scene {
  id: SceneKey // identifiant unique
  question: string // titre / question
  text: string // texte de la scène
  nextIds: string[] // liste d'id de la ou des scènes suivantes
  isEnding?: boolean // true si c'est une scène de fin
  endingType?: EndPoint
  opponent?: Attacker
}

export type Scenes = Record<SceneKey, Scene>
