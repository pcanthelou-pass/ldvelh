import { AttackerProps, Fight } from '@/src/core'
import { useState } from 'react'
import { AttackersView } from './components/AttackersView'

/**
 * AttackersScene component displays the fight scene between the character and the opponent.
 * It allows the player to attack the opponent or flee from the fight.
 * The component manages the endurance of both the character and the opponent,
 *
 * @param param0 - The props for the AttackersScene component.
 * @param param0.opponent - The opponent's properties.
 * @param param0.character - The character's properties.
 * @param param0.fight - The fight instance that manages the fight logic.
 * @param param0.stopFight - Function to stop the fight and handle the end of the fight logic.
 * @param param0.onPressFleeExt - Function to handle fleeing from the fight.
 * @returns A component that displays the fight scene between the character and the opponent, allowing the player to attack or flee.
 */
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
