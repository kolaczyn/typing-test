import styled from 'styled-components/macro';

import Button from '../button';

export default styled(Button)`
  font-size: 1.25rem;
  font-weight: bold;
  border: none;
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 50%;

  color: ${(props) => props.theme.palette.text};
  background-color: ${(props) => props.theme.palette.red};
  transition: all 125ms ease-in;

  &:hover {
    background-color: ${(props) => props.theme.palette.text};
    color: ${(props) => props.theme.palette.red};
  }
`;
