import React from 'react';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import TypingTest from './components/typing-test/TypingTest';
import Ranking from './components/ranking/Ranking';
import Settings from './components/settings/Settings';
import NotFound from './components/not-found/';

import GeneralLayout from './components/layout/general-layout';

import CustomThemeProvider from './providers/CustomThemeProvider';

import favicon from './static/favicon.ico';

export default function App() {
  return (
    <>
      <Helmet>
        <title>Test Your Typing Speed</title>
        <link rel='icon' type='image/png' href={favicon} sizes='64x64' />
      </Helmet>
      <CustomThemeProvider>
        <Router>
          <GeneralLayout>
            <Switch>
              <Route path='/' exact component={TypingTest} />
              <Route path='/ranking' component={Ranking} />
              <Route path='/settings' component={Settings} />
              <Route path='/not-found' component={NotFound} />
              <Redirect from='/' to='/not-found' />
            </Switch>
          </GeneralLayout>
        </Router>
      </CustomThemeProvider>
    </>
  );
}
