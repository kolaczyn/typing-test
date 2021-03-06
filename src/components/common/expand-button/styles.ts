import styled from 'styled-components/macro';

import Button from '../button';

// I not sure if this should be button or Button (a custom made button)
export default styled(Button)`
  background-color: ${(props) => props.theme.palette.text};
  color: ${(props) => props.theme.palette.background};
  transition: all 215ms ease-in;
  padding: .25rem;
  border-radius: 50%;

  &:hover {
    background-color: ${(props) => props.theme.palette.background};
    color: ${(props) => props.theme.palette.text};
    transition: all 215ms ease-out;
  }
`;
