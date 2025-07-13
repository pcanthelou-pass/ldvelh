import { BuildAttacker } from '@actions'
import { AttackerProps } from '@types'
import { useEffect, useRef, useState } from 'react'
import { useGameStore } from './useGameStore'
import { FightService } from '../services/FightService'

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
  const service = useRef<FightService>(new FightService(opponent, character))

  useEffect(() => {
    service.current.reset(opponent, character)
    setOpponentEndurance(service.current.opponentEndurance)
    setHeroEndurance(service.current.heroEndurance)
  }, [character, opponent])

  const onChanceSuccess = () => {
    service.current.applyChanceSuccess()
    setOpponentEndurance(service.current.opponentEndurance)
    setHeroEndurance(service.current.heroEndurance)
    _round()
  }

  const onChanceFailure = () => {
    service.current.applyChanceFailure()
    setOpponentEndurance(service.current.opponentEndurance)
    setHeroEndurance(service.current.heroEndurance)
    _round()
  }

  const fleeFight = () => {
    service.current.flee()
    if (service.current.heroIsDead) {
      dieFight()
    } else {
      hitCharacter(service.current.heroWound)
      hitOpponent(99)
      onAfterFlee?.()
    }
  }

  const continueFight = () => {
    setOpponentEndurance(service.current.opponentEndurance)
    setHeroEndurance(service.current.heroEndurance)
    onAfterContinue?.()
  }

  const surviveFight = () => {
    hitCharacter(service.current.heroWound)
    hitOpponent(service.current.opponentWound)
    onAfterSurvive?.()
  }

  const dieFight = () => {
    hitCharacter(service.current.heroWound)
    hitOpponent(service.current.opponentWound)
    onAfterDie?.()
  }

  const [opponentEndurance, setOpponentEndurance] = useState(
    () => opponent?.abilities?.endurance ?? 0,
  )
  const [heroEndurance, setHeroEndurance] = useState(
    () => character?.abilities?.endurance ?? 0,
  )

  const onNewRound = () => {
    service.current.resolveRound()
    setRound((round) => round + 1)
    setHeroHasBeenTouched(service.current.heroHasBeenTouched)
    setOpponentHasBeenTouched(service.current.opponentHasBeenTouched)
    _round()
  }

  const _round = () => {
    if (service.current.canContinue) {
      continueFight()
    } else if (service.current.heroIsDead) {
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
