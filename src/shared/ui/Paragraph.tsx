import { Text } from 'react-native'
import { paragraphSize, space } from './constant'

export const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <Text style={{ fontSize: paragraphSize, marginBottom: space }}>
    {children}
  </Text>
)
