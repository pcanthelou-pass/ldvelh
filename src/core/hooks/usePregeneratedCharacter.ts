import { CharacterRawProps, useGameStore } from '@core'
import * as pregenerated from '@core/api/character.json'
import { useEffect } from 'react'

export const usePregeneratedCharacter = () => {
  const setCharacter = useGameStore((state) => state.setCharacter)
  const character = useGameStore((state) => state.character)

  useEffect(() => {
    setCharacter(pregenerated.character as unknown as CharacterRawProps)
  }, [setCharacter])

  return character
}
