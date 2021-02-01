import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';

import UnderlinedLink from '../../../../components/common/underlined-link';
import darkTheme from '../../../../static/themes/darkTheme';

afterEach(cleanup);

describe('<UnderlinedLink />', () => {
  it('renders <UnderlinedLink /> with an icon as <a /> tag', () => {
    const { container } = render(
      <ThemeProvider theme={darkTheme}>
        <UnderlinedLink href="https://reactjs.org/" icon="fas fa-code">
          learn about React
        </UnderlinedLink>
      </ThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders <UnderlinedLink /> without icon as react-router-dom\'s <Link /> tag', () => {
    const { container } = render(
      <MemoryRouter>
        <ThemeProvider theme={darkTheme}>
          <UnderlinedLink to="/log-in">
            log in
          </UnderlinedLink>
        </ThemeProvider>
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
