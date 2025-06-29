import { Core } from '@components'
import { createGameStore, createUserStore } from '@stores'
import { Stack } from 'expo-router'
import { enableMapSet } from 'immer'
import { AlertService } from 'src/shared/services/alert'
import { Services } from 'src/shared/services/types'

enableMapSet()

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
          options={({ navigation }) => ({
            title: 'Choisir une histoire',
            headerBackVisible: false,
          })}
        />
        <Stack.Screen
          name="create-user/index"
          options={({ navigation }) => ({
            title: 'Créer votre héro',
            headerBackTitle: 'Retour',
          })}
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
        <Stack.Screen
          name="fight-scene/index"
          options={({ navigation }) => ({
            title: 'Combat',
            headerBackVisible: false,
          })}
        />
        <Stack.Screen
          name="die-scene/index"
          options={({ navigation }) => ({
            title: 'Mort',
            headerBackVisible: false,
          })}
        />
        <Stack.Screen
          name="flee-scene/index"
          options={({ navigation }) => ({
            title: 'Fuite',
            headerBackVisible: false,
          })}
        />
      </Stack>
    </Core>
  )
}
