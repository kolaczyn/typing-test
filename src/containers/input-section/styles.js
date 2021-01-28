import styled from 'styled-components/macro'

export default styled.section`
  display: flex;
  gap: .75rem;

  & > :first-child, & > :last-child {
    /* flex-basis:  */
    flex: 1 1 15%;
  }
  
  & > :nth-child(2) {
    flex: 1 1 70%;
  }
`;