import React from 'react';
import { ThemeProvider } from 'styled-components';
import { cleanup, render, fireEvent } from '@testing-library/react';

import QuickStart from '../../../../components/layout/quick-start';
import darkTheme from '../../../../static/themes/darkTheme';

afterEach(cleanup);

describe('<QuickStart />', () => {
  it('renders <QuickStart />', () => {
    const { container } = render(
      <ThemeProvider theme={darkTheme}>
        <QuickStart />
      </ThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('checks if closing works correctly', () => {
    const { container, getByTestId } = render(
      <ThemeProvider theme={darkTheme}>
        <QuickStart />
      </ThemeProvider>,
    );

    expect(getByTestId('close-button')).toBeTruthy();
    fireEvent.click(getByTestId('close-button'));
    expect(container.firstChild).toMatchSnapshot();
  });
});
