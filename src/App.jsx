import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';

import favicon from "./static/favicon.ico";
import darkTheme from './themes/darkTheme';

import Navbar from './components/navbar';
import Container from './components/ui/Container';
import Body from './components/ui/Body';

import TypingTest from './pages/TypingTest';
import Ranking from './pages/Ranking';
import About from './pages/About';
import RedirectToGithub from './pages/RedirectToGithub';

export default function App() {
  return (
    <>
      <Helmet>
        <title>Test Your Typing Speed</title>
        <link rel="icon" type="image/png" href={favicon} sizes="64x64" />
      </Helmet>
      <ThemeProvider theme={darkTheme}>
        <Body>
          <Router>
            <Container>
              <Navbar />
              <Switch>
                <Route path="/ranking" component={Ranking} />
                <Route path="/about" component={About} />
                <Route path="/github" component={RedirectToGithub} />
                <Route path="/" component={TypingTest} />
              </Switch>
            </Container>
          </Router>
        </Body>
      </ThemeProvider>
    </>
  )
}
