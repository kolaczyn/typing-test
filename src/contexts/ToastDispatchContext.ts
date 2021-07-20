import React, { createContext } from 'react';
import { ToastAction } from '../reducers/toast/reducer';

export default createContext<React.Dispatch<ToastAction>>(() => null);
