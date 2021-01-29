import { produce } from 'immer';

import * as actions from './actions';
import initialState from './initialState';

const typingReducer = (state, action) => {
  switch (action.type) {
    case actions.KEYSTROKE: {
      return produce(state, draft => {
        // split is there in case somebody moves cursor to the middle of the written word and presses space
        const [writtenWord, ...rest] = action.payload.trim().split(' ');
        const isSpacePressed = action.payload.includes(' ');
        const isWordFinished = draft.text.current === writtenWord;
        const isOkay = state.text.current.startsWith(writtenWord);

        // TODO make it so that if you press space when the word is wrong, you get that word wrong.
        if (isSpacePressed && isWordFinished) {
          // basically shift everything to the right:
          // [0, 1, 2], 3, [4, 5, 6] becomes
          // [0, 1, 2, 3], 4, [5, 6].
          draft.text.finished = [...draft.text.finished, draft.text.current];
          draft.text.current = draft.text.unfinished.shift();
          draft.inputValue = rest.join('');
        } else {
          draft.text.isOkay = isOkay;
          draft.inputValue = writtenWord;
        }
      })
    }
    case actions.START_TIMER: {
      return produce(state, draft => {
        // TODO implement
      })
    }
    case actions.TOGGLE_ZEN_MODE: {
      return produce(state, draft => {
        // TODO implement
        draft.isZenModeOn = !draft.isZenModeOn;
      })
    }
    case actions.RESTART: {
      return initialState;
    }
    default:
      return state;
  }
}

export default typingReducer;
