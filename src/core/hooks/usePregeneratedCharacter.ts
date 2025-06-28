import * as pregenerated from '@api/character.json'
import { CharacterRawProps } from '@types'
import { useEffect } from 'react'
import { useGameStore } from './useGameStore'

export const usePregeneratedCharacter = () => {
  const setCharacter = useGameStore((state) => state.setCharacter)
  const character = useGameStore((state) => state.character)

  useEffect(() => {
    setCharacter(pregenerated.character as unknown as CharacterRawProps)
  }, [setCharacter])

  return {
    ...character.abilities,
    name: character.name,
    items: character.items || [],
  }
}
