import React from 'react'
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import favicon from "./static/favicon.ico";

import TypingTest from './pages/TypingTest'
import darkTheme from './themes/darkTheme';

export default function App() {
  return (
    <>
      <Helmet>
        <title>Test Your Typing Speed</title>
        <link rel="icon" type="image/png" href={favicon} sizes="64x64" />
      </Helmet>
      <ThemeProvider theme={darkTheme}>
        <TypingTest />
      </ThemeProvider>
    </>
  )
}
