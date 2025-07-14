import { Fight } from '@types'
import { useCallback } from 'react'

export const useFightChance = (
  fight: React.MutableRefObject<Fight>,
  setHeroEndurance: (v: number) => void,
  setOpponentEndurance: (v: number) => void,
  evaluateRound: () => void,
) => {
  const onChanceSuccess = useCallback(() => {
    fight.current.doSuccessChance()
    setOpponentEndurance(fight.current.opponentEndurance)
    setHeroEndurance(fight.current.heroEndurance)
    evaluateRound()
  }, [fight, setOpponentEndurance, setHeroEndurance, evaluateRound])

  const onChanceFailure = useCallback(() => {
    fight.current.doFailChance()
    setOpponentEndurance(fight.current.opponentEndurance)
    setHeroEndurance(fight.current.heroEndurance)
    evaluateRound()
  }, [fight, setOpponentEndurance, setHeroEndurance, evaluateRound])

  return { onChanceSuccess, onChanceFailure }
}
