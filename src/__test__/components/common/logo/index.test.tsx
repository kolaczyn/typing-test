import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { cleanup, render, waitFor } from '@testing-library/react';

import Logo from '../../../../components/common/logo';
import darkTheme from '../../../../static/themes/darkTheme';

afterEach(cleanup);
beforeEach(() => jest.useFakeTimers());

describe('<Logo />', () => {
  it('renders <Logo />', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ThemeProvider theme={darkTheme}>
          <Logo />
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(getByText('_')).toBeTruthy();
    await waitFor(() => {
      expect(getByText('TypingTest_')).toBeTruthy();
    });
  });
});
