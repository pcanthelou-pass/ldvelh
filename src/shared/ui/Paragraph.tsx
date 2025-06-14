import { Text, View } from 'react-native'
import { paragraphSize, space } from './constant'

export const Paragraph = ({
  justified = false,
  children,
}: {
  justified?: boolean
  children: React.ReactNode
}) => (
  <View
    style={{
      alignContent: 'flex-start',
      width: '100%',
    }}
  >
    <Text
      style={{
        fontSize: paragraphSize,
        marginBottom: space,
        lineHeight: paragraphSize * 1.4,
        textAlign: justified ? 'justify' : 'left',
      }}
    >
      {children}
    </Text>
  </View>
)
