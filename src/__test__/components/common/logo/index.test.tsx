import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';

import Logo from '../../../../components/common/logo';
import darkTheme from '../../../../static/themes/darkTheme';

afterEach(cleanup);

describe('<Logo />', () => {
  it('renders <Logo />', () => {
    const { container } = render(
      <MemoryRouter>
        <ThemeProvider theme={darkTheme}>
          <Logo />
        </ThemeProvider>
      </MemoryRouter>
    );
  });
});
