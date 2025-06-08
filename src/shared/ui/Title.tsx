import { Text } from 'react-native'

export const Title = ({ children }: { children: React.ReactNode }) => (
  <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 20 }}>
    {children}
  </Text>
)
