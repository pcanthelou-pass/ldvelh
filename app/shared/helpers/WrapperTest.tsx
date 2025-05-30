import { Core, createGameSlice, Slices } from '@core'
import { IAlertService } from '@services'
import { ReactNode } from 'react'

class MockAlertService implements IAlertService {
  show(message: string): void | string | ReactNode {
    return null
  }
}

const mockedServices = { alert: new MockAlertService() }
const mockedSlices: Slices = {
  game: createGameSlice,
}

export const WrapperTest = ({ children }: { children: ReactNode }) => (
  <Core services={mockedServices} slices={mockedSlices}>
    {children}
  </Core>
)
