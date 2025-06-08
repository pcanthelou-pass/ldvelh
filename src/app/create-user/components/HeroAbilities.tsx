import { ReactNode } from 'react'
import { View } from 'react-native'

export const HeroAbilities = ({ children }: { children: ReactNode }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    {children}
  </View>
)
