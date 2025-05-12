import { Core } from '@core';
import { AlertService, Services } from '@services';
import { Text, View } from 'react-native';

const services: Services = {
  alert: new AlertService()
};

export default function Index() {
  return (
    <Core services={services}>
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
