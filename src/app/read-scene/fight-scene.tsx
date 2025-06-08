import { useGoBack } from '@navigation'
import { AttackersScene } from './AttackersScene'
import { FightSceneView } from './components/FightSceneView'
import { useFight } from './useFight'

/**
 *
 * FightScene component that displays the fight scene with the opponent and character.
 * It uses the FightSceneView to render the opponent's description and the AttackersScene to handle the fight logic.
 * It also provides functions to stop the fight or flee from it, which navigate back to the previous screen.
 */
const FightScene = () => {
  const { opponent, character, fight, stopFight, fleeFight } = useFight()
  const goBack = useGoBack()

  const stopFightExt = () => {
    stopFight()
    goBack()
  }

  const fleeFightExt = () => {
    fleeFight()
    goBack()
  }

  return (
    <FightSceneView opponent={opponent}>
      <AttackersScene
        opponent={opponent}
        character={character}
        fight={fight}
        stopFight={stopFightExt}
        onPressFleeExt={fleeFightExt}
      />
    </FightSceneView>
  )
}

export default FightScene
