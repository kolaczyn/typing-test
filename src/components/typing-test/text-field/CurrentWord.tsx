import React from 'react';
import PropTypes from 'prop-types';
import { Completed, Wrong } from './styles';
import RemainingCharacters from './RemainingCharacters';

type Props = {
  inputValue: string;
  current: string;
};

const CurrentWord: React.FC<Props> = ({ inputValue, current }) => {
  // if the current word is 'React', and the user writes 'ReactA', the word is wrong,
  // we indicate it by marking the whole word wrong
  if (inputValue.length > current.length) return <Wrong>{current}</Wrong>;
  const input = inputValue.split('');
  const WrittenCharacters: React.FC = () => (
    <>
      {current
        .split('') // convert string into array
        .slice(0, input.length) // omit the characters that are yet to be written
        .map((char, idx) =>
          char === input[idx] ? (
            <Completed key={idx}>{char}</Completed>
          ) : (
            <Wrong key={idx}>{char}</Wrong>
          )
        )}
    </>
  );

  return (
    <>
      <WrittenCharacters />
      <RemainingCharacters current={current} input={input} />
    </>
  );
};

CurrentWord.propTypes = {
  inputValue: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
};

export default CurrentWord;
