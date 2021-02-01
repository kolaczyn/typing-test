import styled from 'styled-components/macro';

import Box from '../../common/box';

// TODO make Wrapper ul and element li

export const Wrapper = styled.section`
  // FIXME I kinda hard-coded the gap between the stats and the section directly above here.
  /* I should move it somewhere else in the future */
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  @media only screen and (max-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Element = styled(Box)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  /* padding: .5rem; */
  text-align: center;
  flex: 1 1 2rem;
  // add spacing betweeen the number and the header
  & > *:first-child {
    margin-bottom: 0.3rem;
  }
`;
