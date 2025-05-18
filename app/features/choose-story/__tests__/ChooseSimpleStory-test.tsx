import { useBookStore } from '@core';
import { render, screen } from '@testing-library/react-native';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Wrapper } from '../../wrapper';
import { ChooseSimpleStory } from '../ChooseSimpleStory';

const MockedComponent = () => {
  const [loading, setLoading] = useState(true);
  const { setTitle, setDescription } = useBookStore();
  useEffect(() => {
    setTitle('Book Title Test');
    setDescription('Book Test Description');
    setLoading(false);
  }, [setTitle, setDescription, setLoading]);
  return loading ? (
    <View>
      <Text>Loading...</Text>
    </View>
  ) : (
    <ChooseSimpleStory />
  );
};

describe('<ChooseStory></ChooseStory>', () => {
  it('Should display the book selected', () => {
    render(
      <Wrapper>
        <MockedComponent />
      </Wrapper>
    );

    expect(screen.getByText(/book title test/i)).toBeVisible();
    expect(screen.getByText(/book test description/i)).toBeVisible();
  });
});
