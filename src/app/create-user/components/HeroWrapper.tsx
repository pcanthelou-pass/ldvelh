import { ReactNode } from 'react'
import { View } from 'react-native'

export const HeroWrapper = ({ children }: { children: ReactNode }) => (
  <View style={{ backgroundColor: '#ffffff', padding: 20 }}>{children}</View>
)
