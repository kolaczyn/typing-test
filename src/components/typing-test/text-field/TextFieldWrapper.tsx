import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './styles';

type Props = {
  children: React.ReactNode;
};

export const TextFieldWrapper: React.FC<Props> = ({ children, ...props }) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <StyledWrapper unselectable="on" {...props}>
    {children}
  </StyledWrapper>
);

TextFieldWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TextFieldWrapper;
