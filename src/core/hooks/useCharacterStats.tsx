import { useGameStore } from './useGameStore'

/**
 *
 * Returns the character's stats from the game store.
 * This is used to display the character's stats in the ReadScene component.
 */
export const useCharacterStats = () => {
  const character = useGameStore((state) => state.character)
  return {
    name: character.name,
    agility: character.abilities.agility,
    endurance: character.abilities.endurance,
    chance: character.abilities.chance,
  }
}
