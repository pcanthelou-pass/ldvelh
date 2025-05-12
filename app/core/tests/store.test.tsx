import { Core, useGameStore } from '@core';
import { IAlertService } from '@services';
import { render, screen } from '@testing-library/react-native';
import { ReactNode } from 'react';
import { Text, View } from 'react-native';

const MyComponent = () => {
  const date = useGameStore((state) => state.date);

  return (
    <View>
      <Text>{`Date: ${date}`}</Text>
    </View>
  );
};

const DATE = '11/11/11';

class MockAlertService implements IAlertService {
  show(message: string): void | string | ReactNode {
    return null;
  }
}

const defaultServices = { alert: new MockAlertService() };

describe('Store in Core', () => {
  it('should be able to use the store within a component', async () => {
    const Wrapper = ({ children }: { children: ReactNode }) => {
      const setDate = useGameStore((state) => state.setDate);
      setDate(DATE);
      return <Core services={defaultServices}>{children}</Core>;
    };

    render(
      <Wrapper>
        <MyComponent />
      </Wrapper>
    );

    expect(screen.getByText(`Date: ${DATE}`)).toBeDefined();
  });
});
