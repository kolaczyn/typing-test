import React, { createContext } from 'react';
import { TypingAction } from '../reducers/typing/reducer';

export default createContext<React.Dispatch<TypingAction> | null>(null);
