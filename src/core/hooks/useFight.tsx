import { AttackerProps, BuildAttacker, Fight, useGameStore } from '@core'
import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook to manage the fight logic in the game.
 * It initializes the opponent and character attackers, manages the fight state,
 * and provides functions to handle fight actions such as attacking and fleeing.
 * It also tracks the endurance of both the opponent and the character.
 * This hook is used in the fight scene to handle the combat mechanics and update the game state accordingly.
 */
export const useFight = (
  onAfterContinue?: (() => void) | undefined,
  onAfterDie?: (() => void) | undefined,
  onAfterFlee?: (() => void) | undefined,
  onAfterSurvive?: (() => void) | undefined,
) => {
  const opponent = BuildAttacker(
    useGameStore(
      (state) => state.currentScene.opponent as unknown as AttackerProps,
    ),
  )

  const character = BuildAttacker(useGameStore((state) => state.character))
  const hitCharacter = useGameStore((state) => state.hitCharacter)
  const hitOpponent = useGameStore((state) => state.hitOpponent)

  const fight = useRef<Fight>(new Fight(null, null))

  useEffect(() => {
    fight.current = new Fight(opponent, character)
    setOpponentEndurance(opponent?.abilities?.endurance ?? 0)
    setHeroEndurance(character?.abilities?.endurance ?? 0)
  }, [])

  const continueFight = () => {
    setOpponentEndurance(fight.current.opponentEndurance)
    setHeroEndurance(fight.current.heroEndurance)
    onAfterContinue?.()
  }

  const surviveFight = () => {
    hitCharacter(fight.current.heroWound)
    hitOpponent(fight.current.opponentWound)
    onAfterSurvive?.()
  }

  const dieFight = () => {
    hitCharacter(fight.current.heroWound)
    hitOpponent(fight.current.opponentWound)
    onAfterDie?.()
  }

  const fleeFight = () => {
    hitCharacter(fight.current.heroWound + 2)
    hitOpponent(99)
    onAfterFlee?.()
  }

  const [opponentEndurance, setOpponentEndurance] = useState(
    () => opponent?.abilities?.endurance ?? 0,
  )
  const [heroEndurance, setHeroEndurance] = useState(
    () => character?.abilities?.endurance ?? 0,
  )

  const onNewRound = () => {
    fight.current.resolveRound()
    if (fight.current.canContinue) {
      continueFight()
    } else if (fight.current.heroIsDead) {
      dieFight()
    } else {
      surviveFight()
    }
  }

  return {
    opponent,
    character,
    fleeFight,
    opponentEndurance,
    heroEndurance,
    onNewRound,
  }
}
