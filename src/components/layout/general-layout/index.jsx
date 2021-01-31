// TODO yeah, it's a pretty dumb name. Change it to something better

import React from 'react';
import PropTypes from 'prop-types';

import { Body, UpperBody, OuterBody } from './styles';
import QuickStart from '../quick-start';
import Navbar from '../navbar';
import Footer from '../footer';

export default function GeneralLayout({ children }) {
  return (
    <Body>
      <OuterBody>
        <UpperBody>
          <Navbar />
          <QuickStart />
          {children}
        </UpperBody>
        <Footer />
      </OuterBody>
    </Body>
  );
}

GeneralLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
