import React from 'react';
import { ThemeProvider } from 'styled-components';
import { cleanup, render } from '@testing-library/react';

import Footer from '../../../../components/layout/footer';
import darkTheme from '../../../../static/themes/darkTheme';

afterEach(cleanup);

describe('<Navbar />', () => {
  it('renders <Navbar />', () => {
    const { container } = render(
      <ThemeProvider theme={darkTheme}>
        <Footer />
      </ThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
