import { Attacker, Character, Fight } from '@core'
import { OpponentType } from '@core/slices/book'
import { Attackers } from './Attackers'
import { FightSceneView } from './components/FightSceneView'

export const FightScene = (sceneInfo: OpponentType, character: Character) => {
  const opponent = new Attacker({
    agility: sceneInfo.agility,
    endurance: sceneInfo.endurance,
  })

  const hero = new Attacker({
    agility: character.abilities.agility,
    endurance: character.abilities.endurance,
  })

  const fight = new Fight(opponent, hero)

  const stopFight = () => {}

  const onPressFlee = () => {}

  return (
    <FightSceneView sceneInfo={sceneInfo}>
      <Attackers
        sceneInfo={sceneInfo}
        character={character}
        fight={fight}
        stopFight={stopFight}
        onPressFlee={onPressFlee}
      />
    </FightSceneView>
  )
}
