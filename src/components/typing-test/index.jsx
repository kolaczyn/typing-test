import React, { useReducer } from 'react';

import InputSection from './input-section';
import Stats from './stats';
import TextField from './text-field';
import TypingContext from '../../contexts/typingContext';
import { initialState, reducer } from '../../reducers/typing';
import TypingTestContainer from './styles';

export default function TypingTest() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TypingTestContainer>
      {/* TODO: improve performance:
        https://hswolff.com/blog/how-to-usecontext-with-usereducer/#performance-concerns */}
      <TypingContext.Provider value={{ state, dispatch }}>
        <InputSection />
        <TextField />
        <Stats />
      </TypingContext.Provider>
    </TypingTestContainer>
  );
}
