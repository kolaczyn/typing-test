import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import ToastStateContext from '../contexts/ToastStateContext';
import ToastDispatchContext from '../contexts/ToastDispatchContext';
import { reducer, initialState } from '../reducers/toast';

const ToastProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ToastStateContext.Provider value={state}>
      <ToastDispatchContext.Provider value={dispatch}>
        {children}
      </ToastDispatchContext.Provider>
    </ToastStateContext.Provider>
  );
};
export default ToastProvider;

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
