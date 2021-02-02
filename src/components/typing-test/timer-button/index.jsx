import React, { useContext } from 'react';

import TypingContext from '../../../contexts/typingContext';
import Button from '../../common/button';
import * as actions from '../../../reducers/typing/actions';

export default function TimerButton() {
  const { state, dispatch } = useContext(TypingContext);

  const startTimer = () => {
    const startingMoment = new Date();
    dispatch({
      type: actions.SET_TIMER_STARTING_MOMENT,
      payload: startingMoment,
    });

    let currentTime = state.timer.startingTime;
    const interval = setInterval(() => {
      console.log('run');
      if (currentTime > 0) {
        dispatch({
          type: actions.TICK_TIMER,
          payload: startingMoment,
        });
      } else clearInterval(interval);
      // eslint-disable-next-line no-plusplus
      currentTime--;
    }, 1000);
    return () => clearInterval(interval);
  };

  return (
    <Button onClick={startTimer}>
      {state.timer.currentTime === null ? state.timer.startingTime : state.timer.currentTime}
    </Button>
  );
}
