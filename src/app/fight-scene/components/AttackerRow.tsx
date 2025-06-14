import { HeroAbilities } from '@ui'
import { View } from 'react-native'
import { Ability } from 'src/shared/ui/Ability'

interface AttackerRowProps {
  name: string
  agility: number
  endurance: number
}
export const AttackerRow = ({ name, agility, endurance }: AttackerRowProps) => (
  <View>
    <HeroAbilities>
      <Ability label="Agilité" value={agility} />
      <Ability label="Endurance" value={endurance} />
    </HeroAbilities>
  </View>
)
