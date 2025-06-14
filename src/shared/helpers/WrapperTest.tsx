import { Core, createGameStore, createUserStore } from '@core'
import { IAlertService } from '@shared'
import { ReactNode } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

class MockAlertService implements IAlertService {
  show(message: string): void | string | ReactNode {
    return null
  }
}

const mockedServices = { alert: new MockAlertService() }
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
