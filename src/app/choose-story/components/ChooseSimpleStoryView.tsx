import { Button, Text, View } from 'react-native'

const ChooseStoryView = ({
  title,
  description,
  onPress,
}: {
  title: string
  description: string
  onPress: () => void
}) => (
  <View>
    <View>
      <Text>{title}</Text>
    </View>
    <View>
      <Text>{description}</Text>
    </View>
    <View>
      <Button onPress={onPress} title="Entrer" />
    </View>
  </View>
)

export default ChooseStoryView
