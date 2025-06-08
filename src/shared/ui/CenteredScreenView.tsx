import { View } from 'react-native'

export const CenteredScreenView = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: 'white',
    }}
  >
    {children}
  </View>
)
