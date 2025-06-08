import { Text } from 'react-native'

export const WelcomeTitle = ({ title }: { title: string }) => (
  <Text style={{ fontSize: 24, marginBottom: 20, fontWeight: 'bold' }}>
    {title}
  </Text>
)
