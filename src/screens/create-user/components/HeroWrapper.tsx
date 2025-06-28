import { ReactNode } from 'react'
import { View } from 'react-native'

export const HeroWrapper = ({ children }: { children: ReactNode }) => (
  <View style={{ backgroundColor: 'red', width: '100%' }}>{children}</View>
)
