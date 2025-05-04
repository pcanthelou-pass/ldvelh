import { render } from '@testing-library/react-native';
import React from 'react';

import Index from '@/app/index';

describe('<Index />', () => {
  test('Text renders correctly on home screen', () => {
    const { getByText } = render(<Index />);

    getByText('Edit app/index.tsx to edit this screen.');
  });
});
