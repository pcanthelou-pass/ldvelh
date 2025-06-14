import { Button, ScrollView, Text, View } from 'react-native'

export const ReadSceneFightView = ({
  sceneText,
  onPressFight,
}: {
  sceneText: string
  onPressFight: () => void
}) => (
  <View style={{ justifyContent: 'space-between', flex: 1 }}>
    <ScrollView>
      <Text
        style={{
          backgroundColor: 'red',
          fontSize: 16,
          lineHeight: 16 * 1.3,
        }}
      >
        {sceneText}
      </Text>
    </ScrollView>
    <View style={{ margin: 20 }}>
      <Button title="Combattre" onPress={onPressFight} />
    </View>
  </View>
)
