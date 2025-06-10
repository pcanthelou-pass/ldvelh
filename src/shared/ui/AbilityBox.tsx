import { megaTitleSize, paragraphSize } from '@ui'
import { Text, View } from 'react-native'

export const AbilityBox = ({ children }: { children: React.ReactNode }) => (
  <View style={{ alignItems: 'center' }}>{children}</View>
)
export const AbilityBoxTitle: React.FC<{
  label: string
}> = ({ label }) => <Text style={{ fontSize: paragraphSize }}>{label}</Text>
export const AbilityBoxValue: React.FC<{
  value: number
}> = ({ value }) => (
  <Text style={{ fontSize: megaTitleSize, fontWeight: 'bold' }}>{value}</Text>
)
