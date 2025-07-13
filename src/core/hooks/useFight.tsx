import { BuildAttacker } from '@actions'
import { AttackerProps, Fight } from '@types'
import { useEffect, useRef, useState } from 'react'
import { useGameStore } from './useGameStore'

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
  const [heroHasBeenTouched, setHeroHasBeenTouched] = useState(false)
  const [opponentHasBeenTouched, setOpponentHasBeenTouched] = useState(false)

  const opponent = BuildAttacker(
    useGameStore(
      (state) => state.currentScene.opponent as unknown as AttackerProps,
    ),
  )

  const character = BuildAttacker(useGameStore((state) => state.character))
  const hitCharacter = useGameStore((state) => state.hitCharacter)
  const hitOpponent = useGameStore((state) => state.hitOpponent)
  const [round, setRound] = useState<number>(0)
  const fight = useRef<Fight>(new Fight(opponent, character))

  useEffect(() => {
    fight.current = new Fight(opponent, character)
    setOpponentEndurance(opponent?.abilities?.endurance ?? 0)
    setHeroEndurance(character?.abilities?.endurance ?? 0)
  }, [character, opponent])

  const onChanceSuccess = () => {
    fight.current.doSuccessChance()
    setOpponentEndurance(fight.current.opponentEndurance)
    setHeroEndurance(fight.current.heroEndurance)
    _round()
  }

  const onChanceFailure = () => {
    fight.current.doFailChance()
    setOpponentEndurance(fight.current.opponentEndurance)
    setHeroEndurance(fight.current.heroEndurance)
    _round()
  }

  const fleeFight = () => {
    fight.current.doWoundHero(2)
    if (fight.current.heroIsDead) {
      dieFight()
    } else {
      hitCharacter(fight.current.heroWound)
      hitOpponent(99)
      onAfterFlee?.()
    }
  }

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

  const [opponentEndurance, setOpponentEndurance] = useState(
    () => opponent?.abilities?.endurance ?? 0,
  )
  const [heroEndurance, setHeroEndurance] = useState(
    () => character?.abilities?.endurance ?? 0,
  )

  const onNewRound = () => {
    fight.current.doResolveRound()
    setRound((round) => round + 1)
    setHeroHasBeenTouched(fight.current.heroHasBeenTouched)
    setOpponentHasBeenTouched(fight.current.opponentHasBeenTouched)
    _round()
  }

  const _round = () => {
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
    round,
    onChanceFailure,
    onChanceSuccess,
    heroHasBeenTouched,
    opponentHasBeenTouched,
  }
}
