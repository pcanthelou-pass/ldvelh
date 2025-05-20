import { Button, Text, View } from 'react-native'

export const ReadIntroductionView = ({
  title,
  forward,
  children,
}: {
  title: string
  forward: () => void
  children: React.ReactNode
}) => (
  <View>
    <View>
      <Text>{title}</Text>
    </View>
    <View>
      <Text>{children}</Text>
    </View>
    <View>
      <Button title="Et maintenant, tournez la page !" onPress={forward} />
    </View>
  </View>
)
