import React, { useContext } from "react";
import Box from "../../components/box";

import TypingContext from '../../contexts/typingContext';
import { Completed, Uncompleted, Good, Wrong } from './styles';

const TextField = () => {
  const { state } = useContext(TypingContext)
  const { finished, current, unfinished, isOkay } = state.text;

  return (
    // TODO remove the ability to select the text
    <Box style={{ textAlign: 'justify' }}>
      <Completed>{finished.join(' ')}</Completed>
      {' '}
      {isOkay ? <Good>{current}</Good> : <Wrong>{current}</Wrong>}
      {' '}
      <Uncompleted>{unfinished.join(' ')}</Uncompleted>
    </Box>
  );
}

export default TextField