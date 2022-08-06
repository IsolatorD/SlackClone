import 'react-native';
import React from 'react';
import DrawerTitle from './DrawerTitle';
import { render } from '@testing-library/react-native';
// @ts-ignore
import { toHaveStyle, toHaveTextContent } from '@testing-library/jest-native';
import ThemeColors from '../../constants/theme';
import DrawerTitleStyles from './DrawerTitleStyles';

expect.extend({ toHaveStyle, toHaveTextContent });

// group: DrawerTitle
describe('DrawerTitle.tsx', () => {
  let component: any = null;
  beforeEach(() => {
    component = render(<DrawerTitle title='Espacios de trabajo' isDarkMode />);
  });

  it('Component render correctly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('View component render correctly', () => {
    expect(component.getByTestId('drawer-title-container')).toBeDefined();
  })

  it('Text component render correctly', () => {
    expect(component.getByTestId('drawer-title')).toBeDefined();
  })

  it('View container component render styles correctly', () => {
    const titleComponent = component.getByTestId('drawer-title-container');
    expect(titleComponent).toHaveStyle(DrawerTitleStyles.titleContainer);
  })
  
  it('Component render initial title correctly', () => {
    const titleComponent = component.getByTestId('drawer-title');
    expect(titleComponent).toHaveTextContent('Espacios de trabajo');
  })

  it('Component render title with dark theme color by passing "isDarkMode" prop with value "true"', () => {
    const titleComponent = component.getByTestId('drawer-title');
    expect(titleComponent).toHaveStyle({
      ...DrawerTitleStyles.title,
      color: ThemeColors.white,
    });
  })

  it('Component render title with light theme color by passing "isDarkMode" prop with value "false"', () => {
    component.rerender(<DrawerTitle title='Espacios de trabajo' isDarkMode={false} />);
    const titleComponent = component.getByTestId('drawer-title');
    expect(titleComponent).toHaveStyle(DrawerTitleStyles.title);
  })

  it('Component render new title text correctly when "title" prop change', () => {
    component.rerender(<DrawerTitle title='Nuevo titulo' isDarkMode={false} />);
    const titleComponent = component.getByTestId('drawer-title');
    expect(titleComponent).toHaveTextContent('Nuevo titulo');
  })
});

