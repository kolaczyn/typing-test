import * as actions from './actions';
import { produce } from 'immer';

const typingReducer = (state, action) => {
  switch (action.type) {
    case actions.KEYSTROKE: {
      return produce(state, draft => {
        draft.inputValue = action.payload;
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
    default:
      return state;
  }
}

export default typingReducer;
