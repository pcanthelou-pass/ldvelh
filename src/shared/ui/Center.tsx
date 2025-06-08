import { View } from 'react-native'

export const Center = ({ children }: { children: React.ReactNode }) => (
  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    {children}
  </View>
)
