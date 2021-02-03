import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styles';

export default function Button({
  isActive, onClick, children, ...rest
}) {
  return (
    // we prevent default in case the button is inside a form
    <Wrapper onClick={isActive ? onClick : (e) => e.preventDefault()} {...rest}>
      {children}
    </Wrapper>

  );
}

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
Button.defaultProps = {
  isActive: true,
};
