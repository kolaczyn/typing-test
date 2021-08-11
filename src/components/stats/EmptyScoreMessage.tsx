import React from 'react';
import Box from '../common/box';
import UnderlinedLink from '../common/underlined-link';

const EmptyScoreMessage: React.FC = () => {
  return (
    <Box title="Nothing to see here, for now">
      <div>
        Come back after you{' '}
        <UnderlinedLink isAlwaysUnderlined to="/">
          complete your first test
        </UnderlinedLink>
        .
      </div>
    </Box>
  );
};
export default EmptyScoreMessage;
