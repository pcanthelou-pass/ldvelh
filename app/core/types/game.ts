import {
  CharacterProps,
  CharacterRawProps,
  EmptyCharacter,
} from '@core/types/character'
import { EmptyScene, Scene } from '@core/types/scene'
import { BookProps, EmptyBook } from './book'

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
   * the whole book
   * // TODO: should be jus a function to access a book and not keep it in memory
   */
  gameBook: BookProps
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
  gameBook: EmptyBook,
  history: [],
  currentScene: { ...EmptyScene, actions: [] },
  date: '',
  character: EmptyCharacter,
  characterNotModified: EmptyCharacter,
}
