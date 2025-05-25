import { Attacker, Character, Fight } from '@core'
import { OpponentType } from '@core/slices/book'
import { useState } from 'react'
import { Button, Text, View } from 'react-native'

interface AttackerRowProps {
  name: string
  agility: number
  endurance: number
}

const AttackerRow = ({ name, agility, endurance }: AttackerRowProps) => (
  <View>
    <Text>{`${name} - Agilité : ${agility} - Endurance : ${endurance}`}</Text>
  </View>
)

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
    <View>
      <View>
        <Text>Combat</Text>
      </View>
      <View>
        <Text>{sceneInfo.text}</Text>
      </View>
      <FightRow
        sceneInfo={sceneInfo}
        character={character}
        fight={fight}
        stopFight={stopFight}
      />
      <Button title="Fuir" onPress={onPressFlee} />
    </View>
  )
}

const FightRow = ({ sceneInfo, character, fight, stopFight }) => {
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
  return (
    <>
      <AttackerRow
        name={sceneInfo.name}
        agility={sceneInfo.agility}
        endurance={opponentEndurance}
      />
      <AttackerRow
        name={character.name}
        agility={character.abilities.agility}
        endurance={heroEndurance}
      />
      <Button title="Attaquer" onPress={onPressAttack} />
    </>
  )
}
