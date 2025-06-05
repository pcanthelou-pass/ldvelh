import { Core, createGameStore, createUserStore } from '@core'
import { AlertService, Services } from '@services'
import { Text, View } from 'react-native'

const services: Services = {
  alert: new AlertService(),
}

// ce serait mieux de pouvoir faire
// const services = new Services() ou on a un tableau ou autre de {[key: string] : Service}
// services.register('alert', new AlertService())
// services.unregister('alert', new AlertService())
// Comme ça on pourrait les ajouter dynamiquement

export default function Index() {
  const slices = {
    // On peut ajouter des slices ici si besoin, par exemple :
    game: createGameStore(),
    user: createUserStore(),
  }
  return (
    <Core services={services} slices={slices}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
    </Core>
  )
}
