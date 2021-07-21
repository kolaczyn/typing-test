import React from 'react';
import { ThemeProvider } from 'styled-components';
import { cleanup, render } from '@testing-library/react';

import Container from '../../../../components/common/container';
import darkTheme from '../../../../static/themes/darkTheme';

afterEach(cleanup);

describe('<Container />', () => {
  it('renders <Container />', () => {
    const { container } = render(
      <ThemeProvider theme={darkTheme}>
        <Container>Hello world</Container>
      </ThemeProvider>
    );
  });
});
