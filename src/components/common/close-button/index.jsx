import React from 'react';

import StyledButton from './styles';

export default function CloseButton({ ...props }) {
  return (
    <StyledButton data-testid="close-button" {...props}>
      ✕
    </StyledButton>
  );
}
