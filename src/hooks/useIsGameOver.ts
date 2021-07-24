import { useContext } from 'react';
import TypingStateContext from '../contexts/TypingStateContext';

const useIsGameOver = (): boolean => {
  const state = useContext(TypingStateContext);
  return state.timer.currentTime === 0;
};
export default useIsGameOver;
