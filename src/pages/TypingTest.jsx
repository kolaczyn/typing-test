import React, { useReducer } from "react";

import Box from '../components/box';
import InputSection from "../containers/input-section";
import TypingTestContainer from '../containers/TypingTest';
import TypingContext from '../contexts/typingContext';
import { initialState, reducer } from '../reducers/typing';

export default function TypingTest() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { inputValue } = state;

  return (
    <TypingTestContainer>
      {/* TODO: improve performance by following:
        https://hswolff.com/blog/how-to-usecontext-with-usereducer/#performance-concerns */}
      <TypingContext.Provider value={{ state, dispatch }}>
        <InputSection />
        { inputValue && <Box>{inputValue}</Box>}
      </TypingContext.Provider>
    </TypingTestContainer>
  );
};
