import { AttackerProps, Fight } from '@core'
import { useState } from 'react'
import { AttackersView } from './components/AttackersView'

export const AttackersScene = ({
  opponent,
  character,
  fight,
  stopFight,
  onPressFleeExt,
}: {
  opponent: AttackerProps
  character: AttackerProps
  fight: Fight
  stopFight: () => void
  onPressFleeExt: () => void
}) => {
  const [opponentEndurance, setOpponentEndurance] = useState(
    () => opponent.abilities.endurance,
  )
  const [heroEndurance, setHeroEndurance] = useState(
    () => character.abilities.endurance,
  )
  const onPressAttack = () => {
    fight.resolveRound()
    if (fight.canContinue) {
      setOpponentEndurance(fight.opponentEndurance)
      setHeroEndurance(fight.heroEndurance)
    } else {
      stopFight()
    }
  }

  const onPressFlee = () => {
    onPressFleeExt()
  }

  return (
    <AttackersView
      character={character}
      heroEndurance={heroEndurance}
      onPressAttack={onPressAttack}
      opponentEndurance={opponentEndurance}
      opponent={opponent}
      onPressFlee={onPressFlee}
    />
  )
}
