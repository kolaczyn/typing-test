import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './styles';

type Props = {
  onClick?: () => void;
};

const CloseButton: React.FC<Props> = ({ onClick, ...props }) => (
  <StyledButton aria-label="close-button" onClick={onClick} {...props}>
    ✕
  </StyledButton>
);

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

CloseButton.defaultProps = {
  onClick: () => null,
};

export default CloseButton;
