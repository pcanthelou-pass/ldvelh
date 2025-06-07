import { Core } from '@core'
import { IAlertService } from '@shared'
import { useQuery } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react-native'
import { ReactNode } from 'react'

const RETURN_VALUE = 'Hello World'

const useCustomHookToTest = () => {
  return useQuery({ queryKey: ['customHookTest'], queryFn: () => RETURN_VALUE })
}

class MockAlertService implements IAlertService {
  show(message: string): void | string | ReactNode {
    return null
  }
}

const defaultServices = { alert: new MockAlertService() }

describe('Cache in Core with React Query', () => {
  it('should have a cache manager in it', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <Core services={defaultServices}>{children}</Core>
    )

    const { result } = renderHook(() => useCustomHookToTest(), { wrapper })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toBe(RETURN_VALUE)
  })
})
