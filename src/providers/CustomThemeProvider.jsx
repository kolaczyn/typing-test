import React, { useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import ThemeContext from '../contexts/themeContext';
import { initialState, reducer } from '../reducers/theme';

export default function CustomThemeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
