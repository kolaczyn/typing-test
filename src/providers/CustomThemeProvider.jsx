import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import ThemeContext from '../contexts/ThemeContext';
import spacingConfig from '../static/themes/spacingConfig';
import { initialState, reducer } from '../reducers/theme';

export default function CustomThemeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={spacingConfig}>
        <ThemeProvider theme={state}>{children}</ThemeProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

CustomThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
