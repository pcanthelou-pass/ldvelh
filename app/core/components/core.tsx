import Services from '@/app/shared/services/types';
import { ServicesProvider } from '@core/context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

const Core = ({
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

export default Core;
