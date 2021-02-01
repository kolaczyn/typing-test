import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';

import Navbar from '../../../../components/layout/navbar';
import darkTheme from '../../../../static/themes/darkTheme';

afterEach(cleanup);

describe('<Navbar />', () => {
  it('renders <Navbar />', () => {
    const { container } = render(
      <MemoryRouter>
        <ThemeProvider theme={darkTheme}>
          <Navbar />
        </ThemeProvider>
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
