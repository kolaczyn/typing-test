import { createContext } from 'react';
import { initialState } from '../reducers/toast';
import { ToastState } from '../reducers/toast/reducer';

export default createContext<ToastState>(initialState);
