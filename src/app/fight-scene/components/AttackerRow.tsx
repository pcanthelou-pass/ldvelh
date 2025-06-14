import { Ability } from '@features/create-user/components/Ability'
import { HeroAbilities } from '@ui'
import { View } from 'react-native'

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
