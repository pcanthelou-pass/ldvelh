import { Core, createGameStore, createUserStore } from '@/src/core'
import { IAlertService } from '@/src/shared/services'
import { ReactNode } from 'react'

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
  <Core services={mockedServices} slices={mockedSlices}>
    {children}
  </Core>
)
