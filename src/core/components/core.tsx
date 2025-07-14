import { ServicesProvider, StoreProvider } from '@contexts'
import { type StoresProps } from '@stores'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { Services } from 'src/shared/services'

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
