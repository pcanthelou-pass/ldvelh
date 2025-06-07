import { useGoToChooseStory } from '@navigation'
import { Button, Text, View } from 'react-native'

export default function Index() {
  const route = useGoToChooseStory()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Welcome</Text>
      <Button title="Choisir une histoire" onPress={route} />
    </View>
  )
}
