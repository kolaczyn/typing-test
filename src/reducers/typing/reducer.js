/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { produce } from 'immer';

import * as actions from './actions';
import initialState from './initialState';
import shiftToRight from '../../utils/shiftToRight';

const typingReducer = (state, action) => {
  switch (action.type) {
    case actions.KEYSTROKE: {
      return produce(state, (draft) => {
        // split is there in case somebody moves
        // cursor to the middle of the written word and presses space
        const [writtenWord, ...rest] = action.payload.trim().split(' ');
        const isSpacePressed = action.payload.includes(' ');
        const isWordFinished = state.text.current === writtenWord;
        const isOkay = state.text.current.startsWith(writtenWord);

        // TODO make it only count characters like a-zA-Z, etc, not backspace
        draft.stats.typedCharacters++;

        // FIXME app throws an error when the test is finished
        if (isSpacePressed) {
          // don't do anything if the user keep pressing space when the input is empty
          if (writtenWord === '') return;

          const { finished, current: currentWord, unfinished } = state.text;
          const current = {
            word: currentWord,
            isOkay: isWordFinished,
          };

          [
            draft.text.finished,
            draft.text.current,
            draft.text.unfinished,
          ] = shiftToRight(finished, current, unfinished);

          draft.inputValue = rest.join('');
          draft.text.isOkay = true;
        } else {
          draft.text.isOkay = isOkay;
          draft.inputValue = writtenWord;
        }
      });
    }
    case actions.TICK_TIMER: {
      return produce(state, (draft) => {
        draft.currentTime--;
        // TODO implement
      });
    }
    case actions.TOGGLE_ZEN_MODE: {
      return produce(state, (draft) => {
        // TODO implement
        draft.isZenModeOn = !draft.isZenModeOn;
      });
    }
    case actions.RESTART: {
      return initialState;
    }
    default:
      return state;
  }
};

export default typingReducer;
