import styled from 'styled-components/macro';

import Box from '../../../components/common/box';

// TODO make Wrapper ul and element li

export const Wrapper = styled.section`
  display: flex;
  gap: .75rem;
  justify-content: space-around;
`;

export const Element = styled(Box)`
padding-top: 1rem;
padding-bottom: 1rem;
  /* padding: .5rem; */
  text-align: center;
  flex: 1 1 2rem;
  // add spacing betweeen the number and the header
  & > *:first-child {
    margin-bottom: .3rem;
  }
`;
