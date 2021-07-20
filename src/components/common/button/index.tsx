import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styles';

type Props = {
  isActive?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ isActive, onClick, children, ...rest }) => (
  // we prevent default in case the button is inside a form
  <Wrapper onClick={isActive ? onClick : e => e.preventDefault()} {...rest}>
    {children}
  </Wrapper>
);
export default Button;

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
Button.defaultProps = {
  isActive: true,
};
