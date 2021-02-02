import styled from 'styled-components/macro';

import Button from '../button';

// I not sure if this should be button or Button (a custom made button)
export default styled(Button)`
  background-color: ${(props) => props.theme.palette.background};

  &:hover {
    background-color: ${(props) => props.theme.palette.text};
    color: ${(props) => props.theme.palette.background};
  }
`;
