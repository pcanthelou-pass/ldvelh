import { View } from 'react-native'

export const NormalView = ({ children }: { children: React.ReactNode }) => (
  <View
    style={{
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      alignContent: 'flex-start',
      width: '100%',
    }}
  >
    {children}
  </View>
)
