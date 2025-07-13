import { useServices } from '@contexts'
import { CharacterRawProps } from '@types'
import { useEffect } from 'react'
import { useGameStore } from './useGameStore'

export const usePregeneratedCharacter = () => {
  const setCharacter = useGameStore((state) => state.setCharacter)
  const character = useGameStore((state) => state.character)
  const { api } = useServices()

  useEffect(() => {
    api
      .getPregeneratedCharacter()
      .then((c) => setCharacter(c as CharacterRawProps))
  }, [api, setCharacter])

  return {
    ...character.abilities,
    name: character.name,
    items: character.items || [],
  }
}
