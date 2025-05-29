import { Attacker, Character, Fight } from '@core'
import { Attackers } from './Attackers'
import { FightSceneView } from './components/FightSceneView'

export const FightScene = (opponent: Attacker, character: Character) => {
  const hero = new Attacker({
    name: 'Héro',
    abilities: character.abilities,
  })

  const fight = new Fight(opponent, hero)

  const stopFight = () => {}

  const onPressFlee = () => {}

  return (
    <FightSceneView opponent={opponent}>
      <Attackers
        opponent={opponent}
        character={character}
        fight={fight}
        stopFight={stopFight}
        onPressFlee={onPressFlee}
      />
    </FightSceneView>
  )
}
