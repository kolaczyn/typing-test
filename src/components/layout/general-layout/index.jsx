// TODO yeah, it's a pretty dumb name. Change it to something better

import React from 'react';

import { Body, UpperBody, OuterBody } from '../Body';
import Navbar from '../navbar';
import Footer from '../footer';

export default function GeneralLayout({ children }) {
  return (
    <Body>
      <OuterBody>
        <UpperBody>
          <Navbar />
          {children}
        </UpperBody>
        <Footer />
      </OuterBody>
    </Body>
  );
}
