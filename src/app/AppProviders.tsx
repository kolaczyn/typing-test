import React from 'react';
import PropTypes from 'prop-types';
import AuthProvider from '../providers/AuthProvider';
import CustomThemeProvider from '../providers/CustomThemeProvider';
import ToastProvider from '../providers/ToastProvider';
import TypingContextProvider from '../providers/TypingContextProvider';

const AppProviders: React.FC = ({ children }) => {
  return (
    <CustomThemeProvider>
      <TypingContextProvider>
        <ToastProvider>
          <AuthProvider>{children}</AuthProvider>
        </ToastProvider>
      </TypingContextProvider>
    </CustomThemeProvider>
  );
};
export default AppProviders;

AppProviders.propTypes = {
  children: PropTypes.node,
};
