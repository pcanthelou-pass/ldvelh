import { Text } from 'react-native'
import { space, titleSize } from './constant'

export const Title = ({
  centered = false,
  children,
}: {
  centered?: boolean
  children: React.ReactNode
}) => (
  <Text
    style={{
      fontSize: titleSize,
      fontWeight: 'bold',
      marginBottom: space,
      textAlign: centered ? 'center' : 'left',
    }}
  >
    {children}
  </Text>
)
