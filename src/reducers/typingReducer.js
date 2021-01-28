import * as actions from './typingActions';
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
    default:
      return state;
  }
}

export default typingReducer;
