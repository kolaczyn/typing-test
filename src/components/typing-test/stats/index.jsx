import React, { useContext } from 'react';

import { Wrapper, Element } from './styles';
import TypingContext from '../../../contexts/typingContext';
// import calculateStats from '../../utils/calculateStats';

// TODO tell the user what's the difference between gross and net wpm. Reference:
// https://www.100utils.com/how-to-calculate-typing-speed-wpm-and-accuracy/

export default function Stats() {
  // TODO add show more button to show info on how is the stat calculated (formula)
  // maybe also show the history of the stat?
  const { state } = useContext(TypingContext);

  const { typedCharacters, correctCharacters, uncorrectedErrors } = state.stats;
  const { currentTime } = state;

  // const { grossWpm, netWpm, accuracy } = calculateStats({ ...state.stats });
  // const data = [
  //   { number: typedCharacters, label: 'Keystrokes' },
  //   {
  //     number: accuracy,
  //     label: 'Accuracy',
  //   },
  //   { number: grossWpm, label: 'Gross WPM' },
  //   { number: netWpm, label: 'Net WPM' },
  // ];

  // for debugging
  const data = [
    { number: typedCharacters, label: 'typedCharacters' },
    { number: correctCharacters, label: 'correctCharacters' },
    { number: uncorrectedErrors, label: 'uncorrectedErrors' },
    { number: currentTime, label: 'currentTime' },
  ];

  return (
    <Wrapper>
      {data.map(({ number, label }) => (
        <Element key={label}>
          <h4>{number}</h4>
          <h6>{label}</h6>
        </Element>
      ))}
    </Wrapper>
  );
}
