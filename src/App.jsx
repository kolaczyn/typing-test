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
import SignUp from './components/auth/sign-up';
import SignIn from './components/auth/sign-in';
import LogOut from './components/auth/log-out';
import Stats from './components/stats';
import NotFound from './components/not-found/index.tsx';

import GeneralLayout from './components/layout/general-layout';

import CustomThemeProvider from './providers/CustomThemeProvider';

import favicon from './static/favicon.ico';
import siteDescription from './static/fixtures/siteDescription';
import TypingContextProvider from './providers/TypingContextProvider';
import AuthProvider from './providers/AuthProvider';
import ToastProvider from './providers/ToastProvider';

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
          <ToastProvider>
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
                    <Route path="/log-out" component={LogOut} />
                    <Route path="/stats" component={Stats} />
                    <Redirect from="/" to="/not-found" />
                  </Switch>
                </GeneralLayout>
              </AuthProvider>
            </Router>
          </ToastProvider>
        </TypingContextProvider>
      </CustomThemeProvider>
    </>
  );
}
