import React from 'react';
import Box from '../common/box';
import UnderlinedLink from '../common/underlined-link';

const PleaseLogInMessage: React.FC = () => {
  return (
    <Box title="You need to log in">
      <div>
        You need to be logged in to have your score save. <br />
        So please{' '}
        <UnderlinedLink isAlwaysUnderlined to="/sign-in">
          sign in
        </UnderlinedLink>
        {' or '}
        <UnderlinedLink isAlwaysUnderlined to="/sign-up">
          sign up
        </UnderlinedLink>
        .
      </div>
    </Box>
  );
};
export default PleaseLogInMessage;
