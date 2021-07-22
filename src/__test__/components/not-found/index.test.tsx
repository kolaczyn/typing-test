import React from 'react';
import { ThemeProvider } from 'styled-components';
import { cleanup, render } from '@testing-library/react';

import darkTheme from '../../../static/themes/darkTheme';
import NotFound from '../../../components/not-found';

afterEach(cleanup);

describe('<NotFound />', () => {
  it('renders <NotFound />', () => {
    const { getByText } = render(
      <ThemeProvider theme={darkTheme}>
        <NotFound />
      </ThemeProvider>
    );
    expect(getByText(/404 error/i)).toBeTruthy();
    expect(getByText(/page not found/i)).toBeTruthy();
  });
});
