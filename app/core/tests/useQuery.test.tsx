import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react-native';
import { FC, ReactNode } from 'react';

const RETURN_VALUE = 'Hello World';

const useCustomHookToTest = () => {
  return useQuery({
    queryKey: ['customHookTest'],
    queryFn: () => RETURN_VALUE
  });
};

interface Props {
  children: ReactNode;
  client: QueryClient;
}

const Wrapper: FC<Props> = ({ children, client }) => (
  <QueryClientProvider client={client}>{children}</QueryClientProvider>
);

describe('useQuery Hook', () => {
  it('Should process the test hook because all is well setup', async () => {
    const queryClient = new QueryClient();

    const wrapper = ({ children }: { children: ReactNode }) => (
      <Wrapper client={queryClient}>{children}</Wrapper>
    );

    const { result } = renderHook(() => useCustomHookToTest(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toBe(RETURN_VALUE);
  });
});
