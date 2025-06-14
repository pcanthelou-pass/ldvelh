import { View } from 'react-native'

export const NavWrapper = ({ children }: { children: React.ReactNode }) => (
  <View
    style={{
      width: '100%',
      justifyContent: 'center',
      alignContent: 'center',
    }}
  >
    {children}
  </View>
)
