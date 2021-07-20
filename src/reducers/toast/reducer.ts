import { produce } from 'immer';
import * as actions from './actions';

export type Toast = {
  content: string;
  type: string;
  id: number;
};
export type ToastState = {
  toasts: Toast[];
  newId: number;
};

export type ToastAction = {
  type: string;
  payload: { content: string; type: string } | number;
};

export default function toastReducer(
  state: ToastState,
  action: ToastAction
): ToastState {
  switch (action.type) {
    case actions.DELETE_TOAST: {
      return produce(state, (draft: ToastState) => {
        const id = action.payload;
        draft.toasts = state.toasts.filter(toast => toast.id !== id);
      });
    }
    case actions.PUSH_TOAST: {
      return produce(state, draft => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { content, type } = action.payload;
        const id = state.newId;
        draft.toasts.push({ content, id, type });
        draft.newId++;
      });
    }
    default:
      return state;
  }
}
