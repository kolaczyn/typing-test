import React from 'react';
import PropTypes from 'prop-types';

import { Body, UpperBody, OuterBody } from './styles';
import QuickStart from '../quick-start';
import Navbar from '../navbar';
import Footer from '../footer';
import ToastsSection from '../../common/toasts-section';

type Props = {
  children: React.ReactNode;
};

const GeneralLayout: React.FC<Props> = ({ children }) => (
  <Body data-test-id="body">
    <OuterBody>
      <UpperBody>
        <Navbar />
        <QuickStart />
        {children}
      </UpperBody>
      <Footer />
      <ToastsSection />
    </OuterBody>
  </Body>
);
export default GeneralLayout;

GeneralLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
