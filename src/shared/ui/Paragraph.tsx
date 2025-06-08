import { Text } from 'react-native'

export const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <Text style={{ fontSize: 16, marginBottom: 20 }}>{children}</Text>
)
