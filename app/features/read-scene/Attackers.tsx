import { useState } from 'react'
import { AttackersView } from './components/AttackersView'

export const Attackers = ({
  sceneInfo,
  character,
  fight,
  stopFight,
  onFlee,
}) => {
  const [opponentEndurance, setOpponentEndurance] = useState(
    () => sceneInfo.endurance,
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
      sceneInfo={sceneInfo}
      onPressFlee={onPressFlee}
    />
  )
}
