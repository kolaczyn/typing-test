import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LogOut from '../components/auth/log-out';
import SignIn from '../components/auth/sign-in';
import SignUp from '../components/auth/sign-up';
import NotFound from '../components/not-found';
import Ranking from '../components/ranking';
import Settings from '../components/settings';
import StatsPage from '../components/stats';
import TypingTest from '../components/typing-test';

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={TypingTest} />
      <Route path="/ranking" component={Ranking} />
      <Route path="/settings" component={Settings} />
      <Route path="/not-found" component={NotFound} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/log-out" component={LogOut} />
      <Route path="/stats" component={StatsPage} />
      <Redirect from="/" to="/not-found" />
    </Switch>
  );
};
export default AppRoutes;
