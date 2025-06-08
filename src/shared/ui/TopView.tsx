import { View } from 'react-native'

export const TopView = ({ children }: { children: React.ReactNode }) => (
  <View style={{ flex: 1, width: '100%' }}>{children}</View>
)
