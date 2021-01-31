import React from 'react';

import Box from '../common/box';
import ChooseTheme from './choose-theme';

export default function Settings() {
  return (
    <Box title='Settings'>
      <ChooseTheme />
    </Box>
  );
}
