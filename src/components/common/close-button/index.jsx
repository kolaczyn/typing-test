import React from 'react';

import StyledButton from './styles';

export default function CloseButton({ ...props }) {
  return (
    <StyledButton data-testid="close-button" {...props}>
      <span className="material-icons">clear</span>
    </StyledButton>
  );
}
