import React from 'react';
import { ThemeProvider } from 'styled-components';
import { cleanup, render } from '@testing-library/react';

import NotFound from '../../../components/not-found';
import darkTheme from '../../../static/themes/darkTheme';

afterEach(cleanup);

describe('<NotFound />', () => {
  it('renders <NotFound />', () => {
    const { container } = render(
      <ThemeProvider theme={darkTheme}>
        <NotFound />
      </ThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
