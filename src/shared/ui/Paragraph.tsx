import { Text, View } from 'react-native'
import { paragraphSize, space } from './constant'

const aligner: Record<
  'left' | 'center' | 'right' | 'justify' | 'auto',
  'left' | 'center' | 'right' | 'justify' | 'auto'
> = {
  left: 'left',
  center: 'center',
  right: 'right',
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
