import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { space } from './constant'

export const CenteredScreenView = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        paddingTop: insets.top,
        paddingHorizontal: space,
        backgroundColor: 'white',
      }}
    >
      {children}
    </View>
  )
}
