import { View } from 'react-native'

export const SpacedRow = ({ children }: { children: React.ReactNode }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    }}
  >
    {children}
  </View>
)
