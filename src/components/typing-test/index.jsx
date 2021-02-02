import React from 'react';

import InputSection from './input-section';
import Stats from './stats';
import TextField from './text-field';
import TypingTestContainer from './styles';

export default function TypingTest() {
  return (
    <TypingTestContainer>
      <InputSection />
      <TextField />
      <Stats />
    </TypingTestContainer>
  );
}
