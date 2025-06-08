import { Text } from 'react-native'
import { paragraphSize } from './constant'

export const WelcomeText = ({ children }: { children: React.ReactNode }) => (
  <Text style={{ fontSize: paragraphSize, textAlign: 'center' }}>
    {children}
  </Text>
)
