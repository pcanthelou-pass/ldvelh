import { AttackerProps, BuildAttacker, Fight, useGameStore } from '@core'
import { useRouter } from 'expo-router'
import { AttackersScene } from './AttackersScene'
import { FightSceneView } from './components/FightSceneView'

/**
 *
 * @returns An object containing the opponent, character, fight instance, and functions to stop or flee from the fight.
 * The opponent is built using the BuildAttacker function from the core, and the character is retrieved from the game store.
 * The fight instance is created with the opponent and character, and the stopFight and fleeFight functions are defined to handle the end of the fight or fleeing from it.
 * The stopFight function hits the character with the heroWound from the fight instance, while the fleeFight function hits the character with a value of 2.
 */
const useFight = () => {
  const opponent = BuildAttacker(
    useGameStore(
      (state) => state.currentScene.opponent as unknown as AttackerProps,
    ),
  )

  const character = BuildAttacker(useGameStore((state) => state.character))
  const hitCharacter = useGameStore((state) => state.hitCharacter)
  const hitOpponent = useGameStore((state) => state.hitOpponent)

  const fight = new Fight(opponent, character)

  const stopFight = () => {
    hitCharacter(fight.heroWound)
    hitOpponent(fight.opponentWound)
  }

  const fleeFight = () => {
    hitCharacter(fight.heroWound + 2)
    hitOpponent(99)
  }

  return { opponent, character, fight, stopFight, fleeFight }
}

/**
 *
 * FightScene component that displays the fight scene with the opponent and character.
 * It uses the FightSceneView to render the opponent's description and the AttackersScene to handle the fight logic.
 * It also provides functions to stop the fight or flee from it, which navigate back to the previous screen.
 */
const FightScene = () => {
  const { opponent, character, fight, stopFight, fleeFight } = useFight()
  const router = useRouter()

  const stopFightExt = () => {
    stopFight()
    router.back()
  }

  const fleeFightExt = () => {
    fleeFight()
    router.back()
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
