import * as actions from '../reducers/typing/actions';

const startTimer = ({ state, dispatch }) => {
  const startingMoment = new Date();
  dispatch({
    type: actions.SET_TIMER_STARTING_MOMENT,
    payload: startingMoment,
  });

  let currentTime = state.timer.startingTime;
  const interval = setInterval(() => {
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

export default startTimer;
