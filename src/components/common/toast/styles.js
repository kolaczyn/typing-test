import styled from 'styled-components/macro';
import Box from '../box';

export default styled(Box)`
  border: ${(props) => props.theme.palette.background} solid 2px;
  display: flex;
  align-items: center;
  gap: .5rem;
  /* bottom: 0;
  right: 0; */
`;
