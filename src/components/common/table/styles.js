import styled from 'styled-components/macro';

export default styled.table`
  margin: 0 auto;
  width: 80%;
`;

export const Thead = styled.thead`
  color: ${(props) => props.theme.palette.lightGray};
  /* padding-bottom: 5rem; */
  height: 5rem;
`;
