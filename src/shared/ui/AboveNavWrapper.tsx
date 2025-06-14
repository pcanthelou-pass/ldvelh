import { View } from 'react-native'

export const AboveNavWrapper = ({
  centered = false,
  children,
}: {
  centered?: boolean
  children: React.ReactNode
}) => (
  <View
    style={{
      flex: 1,
      justifyContent: centered ? 'center' : 'flex-start',
      alignItems: centered ? 'center' : 'flex-start',
      width: '100%',
      backgroundColor: 'white',
    }}
  >
    {children}
  </View>
)
