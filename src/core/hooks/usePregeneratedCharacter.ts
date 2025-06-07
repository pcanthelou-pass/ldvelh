import { CharacterRawProps, useGameStore } from '@core'
import { useEffect } from 'react'
import * as pregenerated from 'src/core/api/character.json'

export const usePregeneratedCharacter = () => {
  const setCharacter = useGameStore((state) => state.setCharacter)
  const character = useGameStore((state) => state.character)

  useEffect(() => {
    setCharacter(pregenerated.character as unknown as CharacterRawProps)
  }, [setCharacter])

  return character
}
