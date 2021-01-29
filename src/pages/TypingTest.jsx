import React, { useReducer } from "react";

import TextField from '../containers/text-field';
import InputSection from "../containers/input-section";
import TypingTestContainer from '../containers/TypingTest';
import TypingContext from '../contexts/typingContext';
import { initialState, reducer } from '../reducers/typing';
import Container from "../components/ui/Container";

export default function TypingTest() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <TypingTestContainer>
        {/* TODO: improve performance:
        https://hswolff.com/blog/how-to-usecontext-with-usereducer/#performance-concerns */}
        <TypingContext.Provider value={{ state, dispatch }}>
          <InputSection />
          <TextField />
        </TypingContext.Provider>
      </TypingTestContainer>
    </Container>
  );
};
