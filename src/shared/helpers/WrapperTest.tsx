import { Core } from '@components'
import { IAlertService } from '@services'
import { createGameStore, createUserStore } from '@stores'
import { ReactNode } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

class MockAlertService implements IAlertService {
  show(message: string): void | string | ReactNode {
    return null
  }
}
// class MockApiService implements IApiService {
//  getBooks:
//  getStory:
// }

const mockedServices = {
  alert: new MockAlertService() /*, api: new MockApiService*/,
}
const mockedSlices = {
  game: createGameStore(),
  user: createUserStore(),
}

export const WrapperTest = ({ children }: { children: ReactNode }) => (
  <SafeAreaProvider>
    <Core services={mockedServices} slices={mockedSlices}>
      {children}
    </Core>
  </SafeAreaProvider>
)
