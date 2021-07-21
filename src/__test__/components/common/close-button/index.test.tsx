import React from 'react';
import { ThemeProvider } from 'styled-components';
import { cleanup, render } from '@testing-library/react';

import CloseButton from '../../../../components/common/close-button';
import darkTheme from '../../../../static/themes/darkTheme';

afterEach(cleanup);

describe('<CloseButton />', () => {
  it('renders <CloseButton />', () => {
    const { container } = render(
      <ThemeProvider theme={darkTheme}>
        <CloseButton />
      </ThemeProvider>
    );
  });
});
