import React, { useContext, useState } from 'react';
import TypingStateContext from '../../../contexts/TypingStateContext';
import app from '../../../firebase';
import useIsGameOver from '../../../hooks/useIsGameOver';
import calculateStats from '../../../utils/calculateStats';
import Button from '../../common/button';
import { Element, Wrapper } from './styles';

const Stats: React.FC = () => {
  // TODO add show more button to show info on how is the stat calculated (formula)
  // maybe also show the history of the stat?
  const state = useContext(TypingStateContext);
  const isGameOver = useIsGameOver();
  const [isStatsHidden, setIsStatsHidden] = useState(false);
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
  const keystrokes = state.stats.typedCharacters;
  const data = [
    { number: keystrokes, label: 'Keystrokes' },
    { number: `${accuracy}%`, label: 'Accuracy' },
    { number: grossWpm, label: 'Gross WPM' },
    { number: netWpm, label: 'Net WPM' },
  ];

  const shouldHideStats = !isGameOver && isStatsHidden;
  const sendStatsToBackend = async () => {
    const { currentUser } = app.auth();
    if (currentUser === null || currentUser.uid === undefined) {
      return;
    }
    const dataToSend: {
      keystrokes: number;
      accuracy: number;
      grossWpm: number;
      netWpm: number;
      userId: string;
      createdAt: number;
    } = {
      keystrokes,
      accuracy,
      grossWpm,
      netWpm,
      userId: currentUser.uid,
      createdAt: new Date().getTime(),
    };
    console.log(currentUser.uid);
    const ref = app.firestore().collection('userScore');
    await ref.add(dataToSend);
    // await ref.doc(uid).set(
    //   {
    //     [timestamp]: dataToSend,
    //   },
    //   { merge: true }
    // );
  };
  if (isGameOver) sendStatsToBackend();

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Button
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        style={{ alignSelf: 'center' }}
        onClick={() => setIsStatsHidden(old => !old)}
      >
        {shouldHideStats ? 'Hide Stats' : 'Show Stats'}
      </Button>
      <Wrapper style={{ display: shouldHideStats ? 'none' : '' }}>
        {data.map(({ number, label }) => (
          <Element
            aria-label={`stats-${label.toLocaleLowerCase()}`}
            key={label}
          >
            <h4 aria-label="number">{number}</h4>
            <h5>{label}</h5>
          </Element>
        ))}
      </Wrapper>
    </div>
  );
};
export default Stats;
