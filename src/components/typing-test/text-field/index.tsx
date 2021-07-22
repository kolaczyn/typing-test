/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import TypingStateContext from '../../../contexts/TypingStateContext';
import CompletedWords from './CompletedWords';
import CurrentWord from './CurrentWord';
import { Uncompleted, WordWrapper } from './styles';
import TextFieldWrapper from './TextFieldWrapper';

const TextField: React.FC = () => {
  const state = useContext(TypingStateContext);
  const { inputValue } = state;
  const { finished, current, unfinished, isOkay } = state.text;
  const { unfinished: unfinishedLines } = state.lines;

  // TODO I'm keeping this here for context,
  // but it may be a better idea to split it into another file
  // I think I can get away with using idx here
  // TODO Im renaming isOkay to isWordOkay because of eslint
  // is telling me about another variablei n the same scope
  // I should probably make so the names are not the same

  return (
    <TextFieldWrapper>
      <CompletedWords finished={finished} />
      <WordWrapper isOkay={isOkay}>
        <CurrentWord inputValue={inputValue} current={current} />
      </WordWrapper>{' '}
      <Uncompleted>{unfinished.join(' ')}</Uncompleted>
      <br />
      <Uncompleted>{unfinishedLines[0]}</Uncompleted>
    </TextFieldWrapper>
  );
};

export default TextField;
