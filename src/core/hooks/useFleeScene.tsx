import { useGameStore } from './useGameStore'

export const useFleeScene = () => {
  const character = useGameStore((state) => state.character)
  return {
    name: character.name,
    endurance: character.abilities.endurance,
  }
}
