import { useGameStore } from '@core'
import * as pregenerated from '@core/api/character.json'

export const usePregeneratedCharacter = () => {
  const setCharacter = useGameStore((state) => state.setCharacter)

  setCharacter(pregenerated.character)

  return pregenerated.character
}
