import { megaTitleSize, paragraphSize } from '@ui'
import { Text, View } from 'react-native'

export const Ability = ({ label, value }: { label: string; value: number }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: paragraphSize }}>{label}</Text>
      <Text style={{ fontSize: megaTitleSize, fontWeight: 'bold' }}>
        {value}
      </Text>
    </View>
  )
}
