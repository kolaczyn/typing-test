/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import * as actions from './actions';
// import initialState from './initialState';

export default function toastReducer(state, action) {
  switch (action.type) {
    case actions.DELETE_TOAST: {
      return produce(state, (draft) => {
        const id = action.payload;
        draft.toasts = state.toasts.filter((toast) => toast.id !== id);
      });
    }
    case actions.PUSH_TOAST: {
      return produce(state, (draft) => {
        const content = action.payload;
        const id = state.newId;
        draft.toasts.push({ content, id });
        draft.newId++;
      });
    }
    default:
      return state;
  }
}
