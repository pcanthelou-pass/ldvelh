import { D6x2 } from '../actions/D6'
import { useGameStore } from './useGameStore'

export const useChance = () => {
  const chance = useGameStore((state) => state.character.abilities.chance)
  const decreaseChance = useGameStore((state) => state.decreaseChance)

  const canTryChance = (): boolean => chance > 0

  const tryChance = ({
    onSuccess,
    onFailure,
  }: {
    onSuccess: () => void
    onFailure: () => void
  }): void => {
    if (!canTryChance()) return

    const hasChance = D6x2() <= chance
    decreaseChance()
    if (hasChance) onSuccess()
    else onFailure()
  }

  return { tryChance, canTryChance, chance }
}
