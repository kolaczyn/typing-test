import React from 'react';
import PropTypes from 'prop-types';
import { Uncompleted } from './styles';

type Props = { current: string; input: string[] };

const RemainingCharacters: React.FC<Props> = ({ current, input }) => (
  <>
    {current
      .split('') // make it array
      .slice(input.length) // look only at the characters that weren't written yet
      .map((char, idx) => (
        <Uncompleted key={idx}>{char}</Uncompleted>
      ))}
  </>
);
export default RemainingCharacters;

RemainingCharacters.propTypes = {
  current: PropTypes.string.isRequired,
  input: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
