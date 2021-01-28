import styled from 'styled-components/macro';
import Box from '../../components/Box';

export const Wrapper = styled.ul`
  list-style-type: none;

  display: flex;
  justify-content: space-between;
`;

export const Element = styled(Box)`
  padding: .5rem;
  text-align: center;
  flex: 1 1 100%;
`;
