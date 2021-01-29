import { produce } from 'immer';

import * as actions from './actions';
import initialState from './initialState';

const typingReducer = (state, action) => {
  switch (action.type) {
    case actions.KEYSTROKE: {
      return produce(state, draft => {
        // This looks pretty ugly
        // TODO: refactor this later
        const isOkay = `${draft.text.current} `.startsWith(action.payload);

        draft.inputValue = action.payload;
        draft.text.isOkay = isOkay;

        // TODO make it so that if you press space when the word is wrong, you get that word wrong.
        if (action.payload.includes(' ') && isOkay) {
          draft.text.finished = [...draft.text.finished, draft.text.current];
          draft.text.current = draft.text.unfinished.shift();
          draft.inputValue = '';
        }
      })
    }
    case actions.START_TIMER: {
      return produce(state, draft => {
        // TODO: implement
      })
    }
    case actions.TOGGLE_ZEN_MODE: {
      return produce(state, draft => {
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
