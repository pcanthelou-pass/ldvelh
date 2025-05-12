import { ServicesProvider } from '@core';
import { Services } from '@services';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

export const Core = ({
  children,
  services
}: {
  children: ReactNode;
  services: Services;
}) => {
  const clientQuery = new QueryClient();
  return (
    <QueryClientProvider client={clientQuery}>
      <ServicesProvider services={services}>{children}</ServicesProvider>
    </QueryClientProvider>
  );
};
