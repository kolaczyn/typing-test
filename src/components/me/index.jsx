import React, { useContext } from 'react';

import AuthContext from '../../contexts/AuthContext';
import Box from '../common/box';

export default function Me() {
  const { currentUser } = useContext(AuthContext);
  return (
    <Box title="Account Information">
      <p>Email:</p>
      <p>
        {currentUser.email}
      </p>
    </Box>
  );
}
