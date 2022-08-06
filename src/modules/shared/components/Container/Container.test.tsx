import 'react-native';
import React from 'react';
import Container from './Container';
import { render } from '@testing-library/react-native'

it('Container.tsx shared component render correctly', () => {
  const { toJSON } = render(<Container />);
  expect(toJSON()).toMatchSnapshot();
});
