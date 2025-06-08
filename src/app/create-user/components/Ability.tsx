import { Text, View } from 'react-native'

export const Ability = ({ label, value }: { label: string; value: number }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 16 }}>{label}</Text>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{value}</Text>
    </View>
  )
}
