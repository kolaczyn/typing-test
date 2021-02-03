import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import ToastStateContext from '../contexts/ToastStateContext';
import ToastDispatchContext from '../contexts/ToastDispatchContext';
import { reducer, initialState } from '../reducers/toast';

export default function ToastProvider({ children }) {
  // const [state] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ToastStateContext.Provider value={state}>
      <ToastDispatchContext.Provider value={dispatch}>
        {children}
      </ToastDispatchContext.Provider>
    </ToastStateContext.Provider>
  );
}

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
