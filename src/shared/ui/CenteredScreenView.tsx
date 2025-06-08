import { View } from 'react-native'
import { space } from './constant'

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
      paddingHorizontal: space,
      backgroundColor: 'white',
    }}
  >
    {children}
  </View>
)
