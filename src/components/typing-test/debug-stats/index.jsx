import React, { useContext } from 'react';

import { Wrapper, Element } from '../stats/styles';
import TypingStateContext from '../../../contexts/TypingStateContext';
// import calculateStats from '../../utils/calculateStats';

// TODO tell the user what's the difference between gross and net wpm. Reference:
// https://www.100utils.com/how-to-calculate-typing-speed-wpm-and-accuracy/

export default function DebugStats() {
  // TODO add show more button to show info on how is the stat calculated (formula)
  // maybe also show the history of the stat?
  const state = useContext(TypingStateContext);
  const { typedCharacters, correctCharacters, uncorrectedErrors } = state.stats;

  const currentTime = state.timer.currentTime === null
    ? state.timer.startingTime : state.timer.currentTime;
  const timePassed = state.timer.startingTime - currentTime;

  const data = [
    { number: typedCharacters, label: 'typedCharacters' },
    { number: correctCharacters, label: 'correctCharacters' },
    { number: uncorrectedErrors, label: 'uncorrectedErrors' },
    { number: `${timePassed}s`, label: 'timePassed' },
  ];

  return (
    <Wrapper>
      {data.map(({ number, label }) => (
        <Element key={label}>
          <h4>{number}</h4>
          <h5>{label}</h5>
        </Element>
      ))}
    </Wrapper>
  );
}
