import React, { useReducer, createContext } from "react";

import TypingTestContainer from '../containers/TypingTest';
import Body from '../components/ui/Body';
import Container from '../components/ui/Container';
import Box from '../components/ui/Box';
import InputSection from "../containers/input-section";

import TypingContext from '../contexts/typingContext';
import typingReducer from '../reducers/typingReducer';

const initialState = {
  inputValue: '',
  currentTime: 8,
  timer: null,
};

export default function TypingTest() {
  const [state, dispatch] = useReducer(typingReducer, initialState);
  const { inputValue } = state;
  return (
    <Body>
      <Container>
        <TypingContext.Provider value={{ state, dispatch }}>
          <TypingTestContainer>
            <InputSection/>
            <Box>{inputValue}</Box>
          </TypingTestContainer>
        </TypingContext.Provider>
      </Container>
    </Body>
  );
};
