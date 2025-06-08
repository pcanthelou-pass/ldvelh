import { Text, View } from 'react-native'

export const HeroName = ({ name }: { name: string }) => (
  <View style={{ alignItems: 'center', marginBottom: 20 }}>
    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{name}</Text>
  </View>
)
