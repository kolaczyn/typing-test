import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styles';

type Props = {
  isActive?: boolean;
  primary?: boolean;
  onClick: () => void | Promise<() => void>;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({
  isActive,
  onClick,
  children,
  primary,
  ...rest
}) => (
  // we prevent default in case the button is inside a form
  <Wrapper
    onClick={isActive ? onClick : e => e.preventDefault()}
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    primary={primary}
    {...rest}
  >
    {children}
  </Wrapper>
);
export default Button;

Button.propTypes = {
  isActive: PropTypes.bool,
  primary: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
Button.defaultProps = {
  isActive: true,
  primary: false,
};
