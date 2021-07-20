import { createContext } from 'react';
import { ToastState } from '../reducers/toast/reducer';

export default createContext<ToastState | null>(null);
