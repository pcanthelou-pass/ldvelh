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
        <Stack.Screen name="index" options={{ title: 'Mon livre' }} />
        <Stack.Screen
          name="choose-story/index"
          options={({ navigation }) => ({ title: 'Choisir une histoire' })}
        />
        <Stack.Screen
          name="create-user/index"
          options={({ navigation }) => ({ title: 'Choisir un héro' })}
        />
        <Stack.Screen
          name="read-introduction/index"
          options={({ navigation }) => ({ title: 'Introduction' })}
        />
        <Stack.Screen
          name="read-scene/index"
          options={({ navigation }) => ({
            title: 'Scène',
            headerBackVisible: false,
          })}
        />
      </Stack>
    </Core>
  )
}
