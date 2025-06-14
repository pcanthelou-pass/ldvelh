import { Text, View } from 'react-native'
import { paragraphSize, space } from './constant'

const aligner = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  justify: 'justify',
  auto: 'auto',
}

export const Paragraph = ({
  align = 'left',
  children,
}: {
  align?: 'left' | 'center' | 'right' | 'justify'
  children: React.ReactNode
}) => {
  return (
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
          textAlign: aligner[align],
        }}
      >
        {children}
      </Text>
    </View>
  )
}
