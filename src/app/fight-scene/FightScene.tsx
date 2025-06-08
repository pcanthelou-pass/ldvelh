import { useFight } from '@core'
import { useGoBack } from '@navigation'
import { AttackersView } from './components/AttackersView'
import { FightSceneView } from './components/FightSceneView'

/**
 *
 * FightScene component that displays the fight scene with the opponent and character.
 * It uses the FightSceneView to render the opponent's description and the AttackersScene to handle the fight logic.
 * It also provides functions to stop the fight or flee from it, which navigate back to the previous screen.
 */
const FightScene = () => {
  const goBack = useGoBack()

  const onAfterContinue = () => {
    // Logic to execute after continuing the fight
  }
  const onAfterDie = () => {
    // Logic to execute after the character dies
    goBack()
  }
  const onAfterFlee = () => {
    // Logic to execute after fleeing the fight
    goBack()
  }
  const onAfterSurvive = () => {
    // Logic to execute after surviving the fight
    goBack()
  }
  const {
    opponentEndurance,
    heroEndurance,
    onNewRound,
    opponent,
    character,

    fleeFight,
  } = useFight(onAfterContinue, onAfterDie, onAfterFlee, onAfterSurvive)

  return (
    <FightSceneView opponent={opponent}>
      <AttackersView
        character={character}
        heroEndurance={heroEndurance}
        onPressAttack={onNewRound}
        opponentEndurance={opponentEndurance}
        opponent={opponent}
        onPressFlee={fleeFight}
      />
    </FightSceneView>
  )
}

export default FightScene
