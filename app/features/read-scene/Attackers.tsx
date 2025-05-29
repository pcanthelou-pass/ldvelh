import { Attacker, Character, Fight } from '@core'
import { useState } from 'react'
import { AttackersView } from './components/AttackersView'

export const Attackers = ({
  opponent,
  character,
  fight,
  stopFight,
  onFlee,
}: {
  opponent: Attacker
  character: Character
  fight: Fight
  stopFight: () => void
  onFlee: () => void
}) => {
  const [opponentEndurance, setOpponentEndurance] = useState(
    () => opponent.abilities.endurance,
  )
  const [heroEndurance, setHeroEndurance] = useState(
    () => character.abilities.endurance,
  )
  const onPressAttack = () => {
    fight.resolveRound()
    if (fight.canContinue()) {
      setOpponentEndurance(fight.opponentEndurance())
      setHeroEndurance(fight.heroEndurance())
    } else {
      stopFight()
    }
  }

  const onPressFlee = () => {
    onFlee()
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
