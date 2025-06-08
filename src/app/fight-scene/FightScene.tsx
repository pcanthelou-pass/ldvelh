import { useFight } from '@core'
import { useGoBack, useGoToDieScene, useGoToFleeScene } from '@navigation'
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
  const goToDieScene = useGoToDieScene()
  const goToFleeScene = useGoToFleeScene()

  const onAfterContinue = () => {}

  const onAfterDie = () => {
    goToDieScene()
  }

  const onAfterFlee = () => {
    goToFleeScene()
  }

  const onAfterSurvive = () => {
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
