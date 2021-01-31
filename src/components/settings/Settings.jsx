import React from 'react';

import Box from '../common/box';
import Container from '../common/Container';
import ChooseTheme from './choose-theme';

export default function Settings() {
  return (
    <Container>
      <Box title='Settings'>
        <ChooseTheme />
      </Box>
    </Container>
  );
}
