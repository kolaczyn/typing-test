import React from 'react';
import { Helmet } from 'react-helmet';
import siteDescription from '../static/fixtures/siteDescription';
import favicon from '../static/favicon.ico';

const AppHelmet: React.FC = () => {
  return (
    <Helmet>
      <title>Test Your Typing Speed</title>
      <meta name="description" content={siteDescription} />
      <link rel="icon" type="image/png" href={favicon} sizes="64x64" />
    </Helmet>
  );
};
export default AppHelmet;
