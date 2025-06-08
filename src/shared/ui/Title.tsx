import { Text } from 'react-native'
import { space, titleSize } from './constant'

export const Title = ({ children }: { children: React.ReactNode }) => (
  <Text
    style={{ fontSize: titleSize, fontWeight: 'bold', marginVertical: space }}
  >
    {children}
  </Text>
)
