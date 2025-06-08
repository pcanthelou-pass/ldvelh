import { useGoToChooseStory } from '@navigation'
import { Button, Text, View } from 'react-native'

export default function Index() {
  const route = useGoToChooseStory()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, marginBottom: 20, fontWeight: 'bold' }}>
          Bienvenue
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center' }}>
          Vous entrez dans une aventure unique et ferez progresser votre héro au
          fil des écrans de cette histoire. Attention aux adversaires et autres
          montres que vous rencontrerez !
        </Text>
      </View>
      <Button title="Choisir une histoire" onPress={route} />
    </View>
  )
}
