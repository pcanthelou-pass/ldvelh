import { Button, Text, View } from 'react-native'

export const FleeView = ({
  name,
  endurance,
  onPressNext,
}: {
  name: any
  endurance: any
  onPressNext: () => void
}) => (
  <View>
    <View>
      <Text>Fuite</Text>
    </View>
    <View>
      <Text>{name} a réussi à fuir !</Text>
      <Text>Vous avez perdu 2 points de vie.</Text>
      <Text>Endurance restante : {endurance}</Text>
    </View>
    <Button title="Continuer" onPress={onPressNext} />
  </View>
)
