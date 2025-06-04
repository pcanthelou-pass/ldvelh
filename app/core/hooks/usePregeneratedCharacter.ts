import { CharacterRawProps, useGameStore } from '@core'
import * as pregenerated from '@core/api/character.json'

export const usePregeneratedCharacter = () => {
  const setCharacter = useGameStore((state) => state.setCharacter)
  const character = setCharacter(
    pregenerated.character as unknown as CharacterRawProps,
  )

  return character
}
