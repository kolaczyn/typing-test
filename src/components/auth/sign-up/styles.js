import styled from 'styled-components/macro';

import Button from '../../common/button/styles';

export default styled.div`
  display: grid;
  grid-template-columns: 3fr 12fr;
  gap: .3rem;
  align-items: center;

  ${Button} {
    grid-column: 2 / 3;
    justify-self: center;
  }
  /* grid-template-rows:  */
`;
