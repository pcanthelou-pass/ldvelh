import { Text } from 'react-native'

export const WelcomeText = ({ children }: { children: React.ReactNode }) => (
  <Text style={{ fontSize: 16, textAlign: 'center' }}>{children}</Text>
)
