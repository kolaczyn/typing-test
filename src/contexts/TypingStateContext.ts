import { createContext } from 'react';
import { TypingState } from '../reducers/typing/initialState';

export default createContext<TypingState | null>(null);
