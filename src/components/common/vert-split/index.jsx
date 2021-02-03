import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styles';

export default function VertSplit({ children, ...props }) {
  return (
    <Wrapper {...props}>{children}</Wrapper>
  );
}

VertSplit.propTypes = {
  children: PropTypes.node.isRequired,
};
