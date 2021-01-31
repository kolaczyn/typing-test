import React from 'react';
import { Helmet } from 'react-helmet';

import Box from '../common/box';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found | Test Your Typing Speed</title>
      </Helmet>
      <Box title="404 Error — Page Not Found">
        The page no longer exists or the provided link is invalid.
      </Box>
    </>
  );
}
