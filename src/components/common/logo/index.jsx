import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from './styles';

export default function Logo() {
  return (
    <Link to="/">
      <Wrapper>
        TypingTest
      </Wrapper>
    </Link>
  );
}
