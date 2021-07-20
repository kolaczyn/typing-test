import React from 'react';
import Action from '../reducers/typing/actions';
import { TypingState } from '../reducers/typing/initialState';
import { TypingAction } from '../reducers/typing/reducer';

const startTimer = ({
  state,
  dispatch,
}: {
  state: TypingState;
  dispatch: React.Dispatch<TypingAction>;
}): (() => void) => {
  const startingMoment = new Date();
  dispatch({
    type: Action.SET_TIMER_STARTING_MOMENT,
    payload: startingMoment,
  });

  let currentTime = state.timer.startingTime;
  const interval = setInterval(() => {
    if (currentTime > 0) {
      dispatch({
        type: Action.TICK_TIMER,
        payload: startingMoment,
      });
    } else clearInterval(interval);
    // eslint-disable-next-line no-plusplus
    currentTime--;
  }, 1000);
  return () => clearInterval(interval);
};

export default startTimer;
