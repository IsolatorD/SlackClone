import 'react-native';
import React from 'react';
import App from './App';
import { render } from '@testing-library/react-native'

describe('App.tsx', () => {
  it('renders app correctly', () => {
    const { toJSON } = render(<App />);
    expect(toJSON()).toMatchSnapshot();
  });
})
