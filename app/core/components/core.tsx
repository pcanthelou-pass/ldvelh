import { ServicesProvider, Slices, StoreProvider } from '@core';
import { Services } from '@services';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

export const Core = ({
  children,
  services,
  slices
}: {
  children: ReactNode;
  services: Services;
  slices?: Slices;
}) => {
  const clientQuery = new QueryClient();

  return (
    <QueryClientProvider client={clientQuery}>
      <StoreProvider slices={slices}>
        <ServicesProvider services={services}>{children}</ServicesProvider>
      </StoreProvider>
    </QueryClientProvider>
  );
};
