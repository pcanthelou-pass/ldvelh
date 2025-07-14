import { Fight } from '@types'
import { useCallback, useState } from 'react'

export const useFightRound = (
  fight: React.MutableRefObject<Fight>,
  continueFight: () => void,
  dieFight: () => void,
  surviveFight: () => void,
) => {
  const [round, setRound] = useState(0)
  const [heroHasBeenTouched, setHeroHasBeenTouched] = useState(false)
  const [opponentHasBeenTouched, setOpponentHasBeenTouched] = useState(false)

  const evaluateRound = useCallback(() => {
    if (fight.current.canContinue) {
      continueFight()
    } else if (fight.current.heroIsDead) {
      dieFight()
    } else {
      surviveFight()
    }
  }, [continueFight, dieFight, surviveFight, fight])

  const onNewRound = useCallback(() => {
    fight.current.doResolveRound()
    setRound((r) => r + 1)
    setHeroHasBeenTouched(fight.current.heroHasBeenTouched)
    setOpponentHasBeenTouched(fight.current.opponentHasBeenTouched)
    evaluateRound()
  }, [evaluateRound, fight])

  return {
    onNewRound,
    round,
    heroHasBeenTouched,
    opponentHasBeenTouched,
    evaluateRound,
  }
}
