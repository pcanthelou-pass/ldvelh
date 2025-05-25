import { Button } from 'react-native'
import { AttackerRow } from './AttackerRow'

export const AttackersView: React.FC<{
  character: unknown
  heroEndurance: unknown
  onPressAttack: () => void
  opponentEndurance: unknown
  sceneInfo: unknown
  onPressFlee: () => void
}> = ({
  character,
  heroEndurance,
  onPressAttack,
  opponentEndurance,
  sceneInfo,
  onPressFlee,
}) => (
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
    <Button title="Fuir" onPress={onPressFlee} />
  </>
)
