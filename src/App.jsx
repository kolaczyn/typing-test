import React, { useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';

import favicon from "./static/favicon.ico";

// TODO: move it to something like ThemeSetterProvider
import ThemeContext from './contexts/themeContext';
import { initialState, reducer } from './reducers/theme';

import Navbar from './components/navbar';
import Container from './components/ui/Container';
import Body from './components/ui/Body';

import TypingTest from './pages/TypingTest';
import Ranking from './pages/Ranking';
import Settings from './pages/Settings';
import RedirectToGithub from './pages/RedirectToGithub';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Helmet>
        <title>Test Your Typing Speed</title>
        <link rel="icon" type="image/png" href={favicon} sizes="64x64" />
      </Helmet>
      <ThemeContext.Provider value={{ state, dispatch }}>

        <ThemeProvider theme={state}>
          <Body>
            <Router>
              <Container>
                <Navbar />
                <Switch>
                  <Route path="/" exact component={TypingTest} />
                  <Route path="/ranking" component={Ranking} />
                  <Route path="/settings" component={Settings} />
                  <Route path="/github" component={RedirectToGithub} />
                </Switch>
              </Container>
            </Router>
          </Body>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}
