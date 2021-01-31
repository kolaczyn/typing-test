import React from 'react';
import { Helmet } from 'react-helmet';

import Box from '../common/box';
import Container from '../common/Container';
import favicon from '../../static/favicon.ico';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found | Test Your Typing Speed</title>
        <link rel='icon' type='image/png' href={favicon} sizes='64x64' />
      </Helmet>
      <Container>
        <Box title='404 Error — Page Not Found'>
          The page no longer exists or the provided link is invalid.
        </Box>
      </Container>
    </>
  );
}
