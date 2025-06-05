import { ServicesProvider, StoreProvider, StoresProps } from '@/src/core'
import { Services } from '@/src/shared/services'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

export const Core = ({
  children,
  services,
  slices,
}: {
  children: ReactNode
  services: Services
  slices?: StoresProps
}) => {
  const clientQuery = new QueryClient()

  return (
    <QueryClientProvider client={clientQuery}>
      <StoreProvider slices={slices}>
        <ServicesProvider services={services}>{children}</ServicesProvider>
      </StoreProvider>
    </QueryClientProvider>
  )
}
