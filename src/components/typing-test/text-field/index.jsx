import React, { useContext } from 'react';

import { Wrapper, Completed, Uncompleted, Wrong, WordWrapper } from './styles';
import TypingContext from '../../../contexts/typingContext';

const TextField = () => {
  const { state } = useContext(TypingContext);
  const { inputValue } = state;
  const { finished, current, unfinished, isOkay } = state.text;

  // TODO I'm keeping this here for context, but it may be a better idea to split it into another file
  const CompletedWords = () =>
    // I think I can get away with using idx here
    finished.map(({ isOkay, word }, idx) => {
      const Component = isOkay ? Completed : Wrong;
      return <Component key={idx}>{`${word} `}</Component>;
    });

  const CurrentWord = () => {
    // if the current word is 'React', and the user writes 'ReactA', the word is wrong,
    // we indicate it by marking the whole word wrong
    if (inputValue.length > current.length) return <Wrong>{current}</Wrong>;

    const input = inputValue.split('');
    const WrittenCharacters = () =>
      current
        .split('') // convert string into array
        .slice(0, input.length) // omit the characters that are yet to be written
        .map((char, idx) =>
          char === input[idx] ? (
            <Completed key={idx}>{char}</Completed>
          ) : (
            <Wrong key={idx}>{char}</Wrong>
          )
        );

    const RemainingCharacters = () =>
      current
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
      </WordWrapper>{' '}
      <Uncompleted>{unfinished.join(' ')}</Uncompleted>
    </Wrapper>
  );
};

export default TextField;
