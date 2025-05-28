import { Attacker, Character } from '@core'
import { Button } from 'react-native'
import { AttackerRow } from './AttackerRow'

export const AttackersView: React.FC<{
  character: Character
  heroEndurance: number
  onPressAttack: () => void
  opponentEndurance: number
  opponent: Attacker
  onPressFlee: () => void
}> = ({
  character,
  heroEndurance,
  onPressAttack,
  opponentEndurance,
  opponent,
  onPressFlee,
}) => (
  <>
    <AttackerRow
      name={opponent.name}
      agility={opponent.agility}
      endurance={opponentEndurance}
    />
    <AttackerRow
      name={character.name}
      agility={character.abilities.agility}
      endurance={heroEndurance}
    />
    <Button title="Attaquer" onPress={onPressAttack} />
    <Button title="Fuir" onPress={onPressFlee} />
  </>
)
