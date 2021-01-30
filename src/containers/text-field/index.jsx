import React, { useContext } from 'react';
import Box from '../../components/box';

import TypingContext from '../../contexts/typingContext';
import { Completed, Uncompleted, Good, Wrong } from './styles';

const TextField = () => {
  const { state } = useContext(TypingContext);
  const { finished, current, unfinished, isOkay } = state.text;

  const FormatCompletedWords = () =>
    // I think we can get away with using idx for now,
    // because we will never change the order
    finished.map(({ isOkay, word }, idx) => {
      const Component = isOkay ? Completed : Wrong;
      return <Component key={idx}>{`${word} `}</Component>;
    });

  return (
    <Box style={{ textAlign: 'justify', userSelect: 'none' }} unselectable='on'>
      <FormatCompletedWords />
      {/* <Completed>{finished.join(' ')}</Completed>{' '} */}
      {isOkay ? <Good>{current}</Good> : <Wrong>{current}</Wrong>}{' '}
      <Uncompleted>{unfinished.join(' ')}</Uncompleted>
    </Box>
  );
};

export default TextField;
