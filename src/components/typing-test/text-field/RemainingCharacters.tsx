import PropTypes from 'prop-types';
import React from 'react';
import { UncompletedCurrentWord } from './styles';

type Props = { current: string; input: string[] };

const RemainingCharacters: React.FC<Props> = ({ current, input }) => (
  <>
    {current
      .split('') // make it array
      .slice(input.length) // look only at the characters that weren't written yet
      .map((char, idx) => (
        <UncompletedCurrentWord key={idx}>{char}</UncompletedCurrentWord>
      ))}
  </>
);
export default RemainingCharacters;

RemainingCharacters.propTypes = {
  current: PropTypes.string.isRequired,
  input: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
