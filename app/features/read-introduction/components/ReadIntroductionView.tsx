import { Text, View } from 'react-native'

export const ReadIntroductionView = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => (
  <View>
    <View>
      <Text>{title}</Text>
    </View>
    <View>
      <Text>{children}</Text>
    </View>
  </View>
)
