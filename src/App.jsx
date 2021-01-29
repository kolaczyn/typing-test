import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar';
import { Body, UpperBody, OuterBody } from './components/ui/Body';

import TypingTest from './pages/TypingTest';
import Ranking from './pages/Ranking';
import Settings from './pages/Settings';

import CustomThemeProvider from './providers/CustomThemeProvider';

import favicon from "./static/favicon.ico";
import Footer from './components/footer';

export default function App() {
  return (
    <>
      <Helmet>
        <title>Test Your Typing Speed</title>
        <link rel="icon" type="image/png" href={favicon} sizes="64x64" />
      </Helmet>
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
