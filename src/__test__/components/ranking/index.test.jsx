import React from 'react';
import { ThemeProvider } from 'styled-components';
import { cleanup, render } from '@testing-library/react';

import Ranking from '../../../components/ranking';
import darkTheme from '../../../static/themes/darkTheme';

afterEach(cleanup);

describe('<Ranking />', () => {
  it('renders <Ranking />', () => {
    const { container } = render(
      <ThemeProvider theme={darkTheme}>
        <Ranking />
      </ThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
