import { ScrollView } from 'react-native'
import { Paragraph } from './Paragraph'

export const TextBox: React.FC<{
  children: React.ReactNode
}> = ({ children }) => (
  <ScrollView style={{ flex: 1, width: '100%' }}>
    <Paragraph align="justify">{children}</Paragraph>
  </ScrollView>
)
