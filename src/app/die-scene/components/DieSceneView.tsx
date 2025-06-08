import { Button, Text, View } from 'react-native'

export const DieSceneView = ({
  title,
  children,
  onPress,
}: {
  title: string
  children: React.ReactNode
  onPress: () => void
}) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{title}</Text>
    <Text>{children}</Text>
    <Button onPress={onPress} title="Quitter" />
  </View>
)
