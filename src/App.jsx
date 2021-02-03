import React from 'react';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import TypingTest from './components/typing-test';
import Ranking from './components/ranking';
import Settings from './components/settings';
import SignUp from './components/sign-up';
import SignIn from './components/sign-in';
import Me from './components/me';
import NotFound from './components/not-found';

import GeneralLayout from './components/layout/general-layout';

import CustomThemeProvider from './providers/CustomThemeProvider';

import favicon from './static/favicon.ico';
import siteDescription from './static/fixtures/siteDescription';
import TypingContextProvider from './providers/TypingContextProvider';
import AuthProvider from './providers/AuthProvider';

export default function App() {
  return (
    <>
      <Helmet>
        <title>Test Your Typing Speed</title>
        <meta name="description" content={siteDescription} />
        <link rel="icon" type="image/png" href={favicon} sizes="64x64" />
      </Helmet>
      <CustomThemeProvider>
        <TypingContextProvider>
          <Router>
            <AuthProvider>
              <GeneralLayout>
                <Switch>
                  <Route path="/" exact component={TypingTest} />
                  <Route path="/ranking" component={Ranking} />
                  <Route path="/settings" component={Settings} />
                  <Route path="/not-found" component={NotFound} />
                  <Route path="/sign-up" component={SignUp} />
                  <Route path="/sign-in" component={SignIn} />
                  <Route path="/me" component={Me} />
                  <Redirect from="/" to="/not-found" />
                </Switch>
              </GeneralLayout>
            </AuthProvider>
          </Router>
        </TypingContextProvider>
      </CustomThemeProvider>
    </>
  );
}
