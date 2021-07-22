import React from 'react';
import { ThemeProvider } from 'styled-components';
import { cleanup, fireEvent, getByText, render } from '@testing-library/react';

import Button from '../../../../components/common/button/styles';
import darkTheme from '../../../../static/themes/darkTheme';

afterEach(cleanup);

describe('<Button />', () => {
  it('renders <Button />', () => {
    const { getByText } = render(
      <ThemeProvider theme={darkTheme}>
        <Button>I am a button</Button>
      </ThemeProvider>
    );
    expect(getByText(/I am a button/)).toBeTruthy();
  });
  it('correctly handles click', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={darkTheme}>
        <Button onClick={handleClick}>I am a button</Button>
      </ThemeProvider>
    );
    fireEvent.click(getByText('I am a button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
