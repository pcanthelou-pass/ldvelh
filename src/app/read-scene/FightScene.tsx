import { AttackerProps, BuildAttacker, Fight, useGameStore } from '@/src/core'
import { AttackersScene } from './AttackersScene'
import { FightSceneView } from './components/FightSceneView'

const useFight = () => {
  const opponent = useGameStore(
    (state) => state.currentScene.opponent as unknown as AttackerProps,
  )

  const character = BuildAttacker(useGameStore((state) => state.character))

  const fight = new Fight(opponent, character)

  const stopFight = () => {}

  const fleeFight = () => {}

  return { opponent, character, fight, stopFight, fleeFight }
}

export const FightScene = () => {
  const { opponent, character, fight, stopFight, fleeFight } = useFight()

  return (
    <FightSceneView opponent={opponent}>
      <AttackersScene
        opponent={opponent}
        character={character}
        fight={fight}
        stopFight={stopFight}
        onPressFleeExt={fleeFight}
      />
    </FightSceneView>
  )
}
