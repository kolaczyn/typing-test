import React from 'react';
import { ThemeProvider } from 'styled-components';
import { cleanup, render } from '@testing-library/react';

import Button from '../../../../components/common/button';
import darkTheme from '../../../../static/themes/darkTheme';

afterEach(cleanup);

describe('<Button />', () => {
  it('renders <Button />', () => {
    const { container } = render(
      <ThemeProvider theme={darkTheme}>
        <Button>I am a button</Button>
      </ThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
