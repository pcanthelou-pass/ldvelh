import { Core, GameSlice, useGameStore } from '@core';
import { IAlertService } from '@services';
import { render, screen, userEvent } from '@testing-library/react-native';
import { ReactNode } from 'react';
import { Button, Text, View } from 'react-native';
import { StateCreator } from 'zustand';

const MyComponent = () => {
  const { date, setDate } = useGameStore((state) => state);

  const onPress = () => {
    setDate('11/11/11');
  };

  return (
    <View>
      <Text>{`Date: ${date}`}</Text>
      <Button onPress={onPress} title={'Change date'} />
    </View>
  );
};

const createGameSlice: StateCreator<GameSlice, [], [], GameSlice> = (set) => ({
  date: '10/10/10',
  setDate: (date?: string) => set(() => ({ date: date }))
});

class MockAlertService implements IAlertService {
  show(message: string): void | string | ReactNode {
    return null;
  }
}

const defaultServices = { alert: new MockAlertService() };
const mockSlices = {
  game: createGameSlice
};

describe('Store in Core', () => {
  it('should be able to use the store within a component', async () => {
    const user = userEvent.setup();
    const Wrapper = ({ children }: { children: ReactNode }) => {
      return (
        <Core services={defaultServices} slices={mockSlices}>
          {children}
        </Core>
      );
    };

    render(
      <Wrapper>
        <MyComponent />
      </Wrapper>
    );

    expect(screen.getByText(`Date: 10/10/10`)).toBeDefined();
    await user.press(screen.getByRole('button'));
    expect(screen.getByText(`Date: 11/11/11`)).toBeDefined();
  });
});
