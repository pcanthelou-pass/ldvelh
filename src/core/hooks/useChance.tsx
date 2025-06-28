import { D6x2 } from '../actions/D6'
import { useGameStore } from './useGameStore'

export type RollType = () => number

export const useChance = () => {
  const chance = useGameStore((state) => state.character.abilities.chance)
  const decreaseChance = useGameStore((state) => state.decreaseChance)

  const canTryChance = (): boolean => chance > 0

  const tryChance = ({
    onSuccess,
    onFailure,
    roll = D6x2,
  }: {
    onSuccess: () => void
    onFailure: () => void
    roll?: RollType
  }): void => {
    if (!canTryChance()) return

    const hasChance = roll() <= chance
    decreaseChance()
    if (hasChance) onSuccess()
    else onFailure()
  }

  return { tryChance, canTryChance, chance }
}
