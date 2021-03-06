import React, { useContext } from 'react';

import { Wrapper, Element } from './styles';
import TypingStateContext from '../../../contexts/TypingStateContext';
import calculateStats from '../../../utils/calculateStats';

const Stats: React.FC = () => {
  // TODO add show more button to show info on how is the stat calculated (formula)
  // maybe also show the history of the stat?
  const state = useContext(TypingStateContext);
  const { typedCharacters, uncorrectedErrors } = state.stats;

  // const { typedCharacters, correctCharacters, uncorrectedErrors } = state.stats;
  const currentTime =
    state.timer.currentTime === null
      ? state.timer.startingTime
      : state.timer.currentTime;
  const timePassed = state.timer.startingTime - currentTime;

  const { grossWpm, netWpm, accuracy } = calculateStats({
    typedCharacters,
    uncorrectedErrors,
    time: timePassed,
  });
  const data = [
    { number: state.stats.typedCharacters, label: 'Keystrokes' },
    { number: `${accuracy}%`, label: 'Accuracy' },
    { number: grossWpm, label: 'Gross WPM' },
    { number: netWpm, label: 'Net WPM' },
  ];

  // for debugging

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
};
export default Stats;
