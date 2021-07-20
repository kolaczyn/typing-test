import { createContext } from 'react';
import initialState, { TypingState } from '../reducers/typing/initialState';

export default createContext<TypingState>(initialState);
