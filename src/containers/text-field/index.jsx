import React, { useContext } from "react";
import Box from "../../components/box";

import TypingContext from '../../contexts/typingContext';
import { Completed, Uncompleted, Good, Wrong } from './styles';


const TextField = () => {
  const { state, dispatch } = useContext(TypingContext)
  const { finished, current, unfinished, isOkay } = state.text;

  const WordComponent = () => {
    const Component = isOkay ? Good : Wrong;
    return <Component> {current}
      {' '}
    </Component>;
  }
  return (
    <Box style={{ textAlign: 'justify' }}>
      <Completed>{finished.join(' ')}</Completed>
      <WordComponent />
      <Uncompleted>{unfinished.join(' ')}</Uncompleted>
    </Box>
  );
}

export default TextField