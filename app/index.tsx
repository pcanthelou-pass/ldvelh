import { Core } from '@core/index';
import { Text, View } from 'react-native';
import { AlertService } from './shared/services/alert';
import Services from './shared/services/types';

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
