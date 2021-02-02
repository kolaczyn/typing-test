import React, { useReducer } from 'react';
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
import NotFound from './components/not-found';

import GeneralLayout from './components/layout/general-layout';

import CustomThemeProvider from './providers/CustomThemeProvider';
import TypingContext from './contexts/typingContext';
import { initialState, reducer } from './reducers/typing';

import favicon from './static/favicon.ico';
import siteDescription from './static/fixtures/siteDescription';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Helmet>
        <title>Test Your Typing Speed</title>
        <meta name="description" content={siteDescription} />
        <link rel="icon" type="image/png" href={favicon} sizes="64x64" />
      </Helmet>
      <CustomThemeProvider>
        {/* TODO: improve performance:
        https://hswolff.com/blog/how-to-usecontext-with-usereducer/#performance-concerns */}
        <TypingContext.Provider value={{ state, dispatch }}>
          <Router>
            <GeneralLayout>
              <Switch>
                <Route path="/" exact component={TypingTest} />
                <Route path="/ranking" component={Ranking} />
                <Route path="/settings" component={Settings} />
                <Route path="/not-found" component={NotFound} />
                <Redirect from="/" to="/not-found" />
              </Switch>
            </GeneralLayout>
          </Router>
        </TypingContext.Provider>
      </CustomThemeProvider>
    </>
  );
}
