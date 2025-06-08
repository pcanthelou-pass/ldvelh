import { Text } from 'react-native'
import { megaTitleSize, space } from './constant'

export const WelcomeTitle = ({ title }: { title: string }) => (
  <Text
    style={{ fontSize: megaTitleSize, marginBottom: space, fontWeight: 'bold' }}
  >
    {title}
  </Text>
)
