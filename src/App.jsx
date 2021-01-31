import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/navbar';
import { Body, UpperBody, OuterBody } from './components/common/Body';

import TypingTest from './components/typing-test/TypingTest';
import Ranking from './components/ranking/Ranking';
import Settings from './components/settings/Settings';

import CustomThemeProvider from './providers/CustomThemeProvider';

import favicon from "./static/favicon.ico";
import Footer from './components/layout/footer';

export default function App() {
  return (
    <>
      <Helmet>
        <title>Test Your Typing Speed</title>
        <link rel="icon" type="image/png" href={favicon} sizes="64x64" />
      </Helmet>
      {/* TODO I don't like this OuterBody, UpperBody components in here
      find a way to put this logic somewhere else or just simplify this */}
      {/* TODO add 404 page */}
      <CustomThemeProvider>
        <Router>
          <Body>
            <OuterBody>
              <UpperBody>
                <Navbar />
                <Switch>
                  <Route path="/" exact component={TypingTest} />
                  <Route path="/ranking" component={Ranking} />
                  <Route path="/settings" component={Settings} />
                </Switch>
              </UpperBody>
              <Footer />
            </OuterBody>
          </Body>
        </Router>
      </CustomThemeProvider>
    </>
  )
}
