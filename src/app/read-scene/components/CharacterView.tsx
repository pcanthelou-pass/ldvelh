import { Ability } from '@features/create-user/components/Ability'
import { View } from 'react-native'

interface CharacterViewProps {
  name: string
  agility: number
  endurance: number
  chance: number
}
export const CharacterView = ({
  name,
  agility,
  endurance,
  chance,
}: CharacterViewProps) => (
  <View
    style={{
      marginVertical: 10,
      paddingTop: 5,
      paddingBottom: 10,
      backgroundColor: '#f0f0f0',
      borderRadius: 20,
    }}
  >
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      <Ability label="agilité" value={agility} />
      <Ability label="endurance" value={endurance} />
      <Ability label="chance" value={chance} />
    </View>
  </View>
)
