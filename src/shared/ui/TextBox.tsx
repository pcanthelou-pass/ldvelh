import { Paragraph } from '@ui'
import { ScrollView } from 'react-native'

export const TextBox: React.FC<{
  children: React.ReactNode
}> = ({ children }) => (
  <ScrollView style={{ flex: 1, width: '100%' }}>
    <Paragraph>{children}</Paragraph>
  </ScrollView>
)
