import React, { useReducer } from "react";

import Box from '../components/box';
import TextField from '../containers/text-field';
import InputSection from "../containers/input-section";
import TypingTestContainer from '../containers/TypingTest';
import TypingContext from '../contexts/typingContext';
import { initialState, reducer } from '../reducers/typing';

export default function TypingTest() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { inputValue, text } = state;

  return (
    <TypingTestContainer>
      {/* TODO: improve performance:
        https://hswolff.com/blog/how-to-usecontext-with-usereducer/#performance-concerns */}
      <TypingContext.Provider value={{ state, dispatch }}>
        <InputSection />
        <TextField />

        {/* For debugging */}
        {inputValue && <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
          <section>
            {inputValue}
          </section>
          <section>
            {text.current}
          </section>
        </Box>}

      </TypingContext.Provider>
    </TypingTestContainer>
  );
};
