import { useFight } from '@hooks'
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

  const tryChance = () => {
    tryChanceFight()
  }

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
    round,
    opponentHasBeenTouched,
    heroHasBeenTouched,
    fleeFight,
    tryChanceFight,
    chance,
  } = useFight(onAfterContinue, onAfterDie, onAfterFlee, onAfterSurvive)

  return (
    <FightSceneView
      opponent={opponent}
      onPressAttack={onNewRound}
      onPressFlee={fleeFight}
      onPressChance={tryChance}
      round={round}
    >
      <AttackersView
        character={character}
        heroEndurance={heroEndurance}
        opponentEndurance={opponentEndurance}
        opponent={opponent}
        chance={chance}
        opponentIsTouched={opponentHasBeenTouched}
        heroIsTouched={heroHasBeenTouched}
      />
    </FightSceneView>
  )
}

export default FightScene
