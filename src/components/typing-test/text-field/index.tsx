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

  return (
    <TextFieldWrapper aria-label="text-field">
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
