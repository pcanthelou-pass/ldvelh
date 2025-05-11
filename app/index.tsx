import { Text, View } from 'react-native';
import Core from './core/components/core';

export default function Index() {
  return (
    <Core>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
    </Core>
  );
}
