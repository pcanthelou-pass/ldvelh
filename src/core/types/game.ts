import { BookProps } from './book'
import {
  BookIntroductionProps,
  EmptyBookIntroduction,
} from './introduction'
import { CharacterProps, CharacterRawProps, EmptyCharacter } from './character'
import { EmptyScene, Scene } from './scene'
import { EmptyScenes, ScenesProps } from './scenes'

export interface GameProps {
  /**
   * date the game was started
   */
  date: string
  /**
   * array of scene ids already done
   */
  history: string[]
  /**
   * the current scene played
   */
  currentScene: Scene
  /**
   * identifier of the current book
   */
  bookId: string
  /**
   * introduction of the current book
   */
  introduction: BookIntroductionProps
  /**
   * fetched scenes of the current book
   */
  scenes: ScenesProps
  /**
   * the character stats and items, the one in play
   */
  character: CharacterProps
  /**
   * the base character, the one before reading the book
   */
  characterNotModified: CharacterProps
}
export interface GameActions {
  setDate: (date: string) => void
  setBook: (book: BookProps) => void
  setCharacter: (character: CharacterRawProps) => CharacterProps
  /**
   * set the current scene to '1'
   * @returns
   */
  startBook: () => void
  /**
   * heal the character and give is base endurance back
   * @returns
   */
  resetEndurance: () => void
  /**
   * use one item or one charge of an item
   * @param key of the item
   * @returns
   */
  consumeItemByOne: (key: string) => void
  /**
   * the character is wounded by an opponent
   * @param hit the number of hit points
   * @returns
   */
  hitCharacter: (hit?: number) => void
  /**
   * the character use 1 point of chance
   * @returns
   */
  decreaseChance: () => void
  /**
   * the opponent is wounded by the hero
   * @param hit the number of hit points
   * @returns
   */
  hitOpponent: (hit?: number) => void
  /**
   * change the current scene by the one selected by the player
   * or to the end of the book
   * @param scene the scene key to load
   * @returns
   */
  moveToScene: (scene: string) => void
  /**
   * back to the book selection
   * @returns
   */
  quitGame: () => void
}

export type GameState = GameProps & GameActions

export const DEFAULT_GAME_PROPS: GameProps = {
  bookId: '',
  introduction: EmptyBookIntroduction,
  scenes: EmptyScenes,
  history: [],
  currentScene: { ...EmptyScene, actions: [] },
  date: '',
  character: EmptyCharacter,
  characterNotModified: EmptyCharacter,
}
