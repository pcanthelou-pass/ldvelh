import { Core, createGameStore, createUserStore } from '@/src/core'
import { AlertService, Services } from '@/src/shared/services'
import { Stack } from 'expo-router'

const services: Services = {
  alert: new AlertService(),
}
// ce serait mieux de pouvoir faire
// const services = new Services() ou on a un tableau ou autre de {[key: string] : Service}
// services.register('alert', new AlertService())
// services.unregister('alert', new AlertService())
// Comme ça on pourrait les ajouter dynamiquement
const slices = {
  // On peut ajouter des slices ici si besoin, par exemple :
  game: createGameStore(),
  user: createUserStore(),
}

export default function RootLayout() {
  return (
    <Core services={services} slices={slices}>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'LDVELH' }} />
        <Stack.Screen
          name="features/choose-story"
          options={{ title: 'Choisir une histoire' }}
        />
      </Stack>
    </Core>
  )
}
