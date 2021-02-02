import styled from 'styled-components/macro';

import Button from '../button';

// TODO make it look decent on light mode; fix these hardcoded values
export default styled(Button)`
  font-size: 1.25rem;
  font-weight: bold;
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 50%;

  background-color: ${(props) => props.theme.palette.red};
  color: ${(props) => props.theme.palette.white};
  border: ${(props) => props.theme.palette.background} solid 0.4rem;
  transition: all 125ms ease-in;

  &:hover {
    background-color: ${(props) => props.theme.palette.text};
    color: ${(props) => props.theme.palette.red};
  }
`;
