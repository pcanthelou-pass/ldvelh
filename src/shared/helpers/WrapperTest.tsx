import { Core } from '@components'
import { createStores } from '@stores'
import { ReactNode } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { IAlertService } from '../services/types'
import { ApiService } from '../services/api'

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
  alert: new MockAlertService(),
  api: new ApiService(),
}
const mockedSlices = createStores()

export const WrapperTest = ({ children }: { children: ReactNode }) => (
  <SafeAreaProvider>
    <Core services={mockedServices} slices={mockedSlices}>
      {children}
    </Core>
  </SafeAreaProvider>
)
