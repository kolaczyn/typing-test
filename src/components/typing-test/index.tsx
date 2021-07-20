import React from 'react';

import InputSection from './input-section';
import Stats from './stats';
import TextField from './text-field';
import TypingTestContainer from './styles';

const TypingTest: React.FC = () => {
  return (
    <TypingTestContainer>
      <InputSection />
      <TextField />
      <Stats />
    </TypingTestContainer>
  );
};
export default TypingTest;
