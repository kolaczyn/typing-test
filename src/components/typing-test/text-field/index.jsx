/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import {
  StyledWrapper, Completed, Uncompleted, Wrong, WordWrapper,
} from './styles';
import TypingStateContext from '../../../contexts/TypingStateContext';

export const Wrapper = ({ children, ...props }) => (
  <StyledWrapper unselectable="on" {...props}>
    {children}
  </StyledWrapper>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

const TextField = () => {
  const state = useContext(TypingStateContext);
  const { inputValue } = state;
  const {
    finished, current, unfinished, isOkay,
  } = state.text;

  // TODO I'm keeping this here for context,
  // but it may be a better idea to split it into another file
  // I think I can get away with using idx here
  // TODO Im renaming isOkay to isWordOkay because of eslint
  // is telling me about another variablei n the same scope
  // I should probably make so the names are not the same
  const CompletedWords = () => finished.map(({ isOkay: isWordOkay, word }, idx) => {
    const Component = isWordOkay ? Completed : Wrong;
    return <Component key={idx}>{`${word} `}</Component>;
  });

  const CurrentWord = () => {
    // if the current word is 'React', and the user writes 'ReactA', the word is wrong,
    // we indicate it by marking the whole word wrong
    if (inputValue.length > current.length) return <Wrong>{current}</Wrong>;

    const input = inputValue.split('');
    const WrittenCharacters = () => current
      .split('') // convert string into array
      .slice(0, input.length) // omit the characters that are yet to be written
      .map((char, idx) => (char === input[idx] ? (
        <Completed key={idx}>{char}</Completed>
      ) : (
        <Wrong key={idx}>{char}</Wrong>
      )));

    const RemainingCharacters = () => current
      .split('') // make it array
      .slice(input.length) // look only at the characters that weren't written yet
      .map((char, idx) => <Uncompleted key={idx}>{char}</Uncompleted>);

    return (
      <>
        <WrittenCharacters />
        <RemainingCharacters />
      </>
    );
  };

  return (
    <Wrapper>
      <CompletedWords />
      <WordWrapper isOkay={isOkay}>
        <CurrentWord />
      </WordWrapper>
      {' '}
      <Uncompleted>{unfinished.join(' ')}</Uncompleted>
    </Wrapper>
  );
};

export default TextField;
