import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styles';
import CloseButton from '../close-button';

export default function Toast({ children, handleClick, ...rest }) {
  return (
    <Wrapper {...rest}>
      <CloseButton onClick={handleClick} />
      {children}
    </Wrapper>
  );
}

Toast.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};
