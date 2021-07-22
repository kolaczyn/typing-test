import React from 'react';
import { ThemeProvider } from 'styled-components';
import { cleanup, fireEvent, render } from '@testing-library/react';

import CloseButton from '../../../../components/common/close-button';
import darkTheme from '../../../../static/themes/darkTheme';

afterEach(cleanup);

describe('<CloseButton />', () => {
  it('correctly handles onClick', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <ThemeProvider theme={darkTheme}>
        <CloseButton onClick={handleClick} />
      </ThemeProvider>
    );
    const closeButton = getByRole('button', { name: /close-button/ });
    fireEvent.click(closeButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
