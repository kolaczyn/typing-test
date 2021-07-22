import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppHelmet from './app/AppHelmet';
import AppProviders from './app/AppProviders';
import AppRoutes from './app/AppRoutes';
import GeneralLayout from './components/layout/general-layout';

const App: React.FC = () => (
  <>
    <AppHelmet />
    <AppProviders>
      <Router>
        <GeneralLayout>
          <AppRoutes />
        </GeneralLayout>
      </Router>
    </AppProviders>
  </>
);
export default App;
