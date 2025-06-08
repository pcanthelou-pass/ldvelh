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
  <View
    style={{
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
    }}
  >
    <View style={{ flex: 1, width: '100%' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 20 }}>
        {title}
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>{description}</Text>
    </View>
    <View>
      <Button onPress={onPress} title="Entrer" />
    </View>
  </View>
)

export default ChooseStoryView
