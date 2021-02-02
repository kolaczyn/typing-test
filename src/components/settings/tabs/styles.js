import styled from 'styled-components/macro';

import Button from '../../common/button';

export default styled.section`
  border-right: ${(props) => props.theme.palette.background} solid 2px;
  margin-right: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;

  ${Button} {
    flex-grow: 1;
    flex-basis: 2.5rem;
  }
`;
