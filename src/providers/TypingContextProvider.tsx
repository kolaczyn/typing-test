import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import TypingStateContext from '../contexts/TypingStateContext';
import TypingDispatchContext from '../contexts/TypingDispatchContext';
import { initialState, reducer } from '../reducers/typing';

const TypingContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TypingStateContext.Provider value={state}>
      <TypingDispatchContext.Provider value={dispatch}>
        {children}
      </TypingDispatchContext.Provider>
    </TypingStateContext.Provider>
  );
};
export default TypingContextProvider;

TypingContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
