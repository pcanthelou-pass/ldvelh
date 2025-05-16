import { Core, useServices } from '@core';
import { IAlertService } from '@services';
import { render, screen } from '@testing-library/react-native';
import { ReactNode } from 'react';
import { Text, View } from 'react-native';

const MyComponent = () => {
  const { alert } = useServices();
  const msg = alert.show(MOCK_MESG) as string;

  return (
    <View>
      <Text>{msg}</Text>
    </View>
  );
};

const MOCK_MESG = 'Mocked Message';

class MockAlertService implements IAlertService {
  show(message: string): void | string | ReactNode {
    return `X${message}X`;
  }
}

const defaultServices = { alert: new MockAlertService() };

describe('Services in Core', () => {
  it('should be able to use my alert service', async () => {
    const Wrapper = ({ children }: { children: ReactNode }) => (
      <Core services={defaultServices}>{children}</Core>
    );

    render(
      <Wrapper>
        <MyComponent />
      </Wrapper>
    );

    expect(screen.getByText(`X${MOCK_MESG}X`)).toBeDefined();
  });
});
