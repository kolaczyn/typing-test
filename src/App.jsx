import React, { useReducer } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar';
import Body from './components/ui/Body';
import Container from './components/ui/Container';

import Ranking from './pages/Ranking';
import RedirectToGithub from './pages/RedirectToGithub';
import Settings from './pages/Settings';
import TypingTest from './pages/TypingTest';

import CustomThemeProvider from './providers/CustomThemeProvider';

import favicon from "./static/favicon.ico";

export default function App() {
  return (
    <>
      <Helmet>
        <title>Test Your Typing Speed</title>
        <link rel="icon" type="image/png" href={favicon} sizes="64x64" />
      </Helmet>
      <CustomThemeProvider>
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
      </CustomThemeProvider>
    </>
  )
}
