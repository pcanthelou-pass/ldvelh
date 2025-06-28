import { D6 } from '@actions'
import * as pregenerated from '@api/character.json'
import { AbilitiesProps, CharacterRawProps } from '@types'
import { useEffect } from 'react'
import { useGameStore } from './useGameStore'

/**
 *
 * @returns A random character with abilities and items.
 * This hook generates a character with random abilities based on pregenerated data.
 * The abilities include agility, endurance, and chance, which are randomly assigned values.
 * The character's name and items are also derived from the pregenerated data.
 */
export const useRandomCharacter = () => {
  const setCharacter = useGameStore((state) => state.setCharacter)
  const character = useGameStore((state) => state.character)

  useEffect(() => {
    const randomAbilities: AbilitiesProps = {
      agility: 6 + D6(),
      endurance: 12 + D6(2),
      chance: 6 + D6(),
    }
    const newCharacter: CharacterRawProps = {
      ...(pregenerated.character as unknown as CharacterRawProps),
      abilities: randomAbilities,
    }
    setCharacter(newCharacter)
  }, [setCharacter])

  return {
    ...character.abilities,
    name: character.name,
    items: character.items || [],
  }
}
