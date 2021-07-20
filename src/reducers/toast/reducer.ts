import { produce } from 'immer';
import Action from './actions';

export enum ToastType {
  Info = 'info',
  Warning = 'warning',
  Danger = 'danger',
}

export type Toast = {
  content: string;
  type: ToastType;
  id: number;
};
export type ToastState = {
  toasts: Toast[];
  newId: number;
};

export type ToastAction =
  | {
      type: Action.DELETE_TOAST;
      payload: number;
    }
  | {
      type: Action.PUSH_TOAST;
      payload: {
        content: string;
        type: ToastType;
      };
    };

export default function toastReducer(
  state: ToastState,
  action: ToastAction
): ToastState {
  switch (action.type) {
    case Action.DELETE_TOAST: {
      return produce(state, (draft: ToastState) => {
        const id = action.payload;
        draft.toasts = state.toasts.filter(toast => toast.id !== id);
      });
    }
    case Action.PUSH_TOAST: {
      return produce(state, draft => {
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
