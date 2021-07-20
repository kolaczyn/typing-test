import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styles';

type Props = {
  isActive?: boolean;
  primary?: boolean;
  secondary?: boolean;
  onClick?: (e: any) => void;
  submitType?: 'button' | 'reset' | 'submit';
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({
  isActive,
  onClick,
  children,
  submitType,
  primary,
  secondary,
  ...rest
}) => (
  // we prevent default in case the button is inside a form
  <Wrapper
    onClick={isActive ? onClick : e => e.preventDefault()}
    primary={primary}
    secondary={secondary}
    type={submitType}
    {...rest}
  >
    {children}
  </Wrapper>
);
export default Button;

Button.propTypes = {
  submitType: PropTypes.oneOf(['button', 'reset', 'submit']),
  isActive: PropTypes.bool,
  primary: PropTypes.bool,
  onClick: PropTypes.func,
  secondary: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
Button.defaultProps = {
  submitType: 'button',
  isActive: true,
  primary: false,
  secondary: false,
  onClick: () => null,
};
