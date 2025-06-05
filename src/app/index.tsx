import { useRouter } from 'expo-router'
import { Button, Text, View } from 'react-native'
export default function Index() {
  const router = useRouter()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Welcome</Text>
      <Button
        title="Choisir une histoire"
        onPress={() => router.replace('/choose-story')} // Use replace to avoid going back to this screen
      />
    </View>
  )
}
