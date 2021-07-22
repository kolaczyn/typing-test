import React from 'react';
import { ThemeProvider } from 'styled-components';
import { cleanup, render, waitFor } from '@testing-library/react';

import Ranking from '../../../components/ranking';
import darkTheme from '../../../static/themes/darkTheme';

afterEach(cleanup);
beforeEach(() => jest.useFakeTimers());

describe('<Ranking />', () => {
  it('renders loading state', () => {
    const { getByText } = render(
      <ThemeProvider theme={darkTheme}>
        <Ranking />
      </ThemeProvider>
    );
    expect(getByText(/loading/i)).toBeTruthy();
  });
  it('shows the header of the table', async () => {
    const { getByText } = render(
      <ThemeProvider theme={darkTheme}>
        <Ranking />
      </ThemeProvider>
    );
    await waitFor(() => {
      expect(getByText(/username/i)).toBeTruthy();
    });

    await waitFor(() => {
      expect(getByText(/wpm/i)).toBeTruthy();
    });

    await waitFor(() => {
      expect(getByText(/when/i)).toBeTruthy();
    });
  });
});
