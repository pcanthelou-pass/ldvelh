import { AttackerProps } from '@core'
import { Button } from 'react-native'
import { AttackerRow } from './AttackerRow'

export const AttackersView: React.FC<{
  character: AttackerProps
  heroEndurance: number
  onPressAttack: () => void
  opponentEndurance: number
  opponent: AttackerProps
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
      agility={opponent?.abilities?.agility ?? 0}
      endurance={opponentEndurance}
    />
    <AttackerRow
      name={character.name}
      agility={character?.abilities?.agility ?? 0}
      endurance={heroEndurance}
    />
    <Button title="Attaquer" onPress={onPressAttack} />
    <Button title="Fuir" onPress={onPressFlee} />
  </>
)
