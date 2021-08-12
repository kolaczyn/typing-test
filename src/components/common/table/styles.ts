import styled from 'styled-components/macro';

const StyledTable = styled.table`
  margin: 0 auto;
  width: 100%;
  border: none;
  tr {
    border-radius: ${props => props.theme.borderRadius};
    overflow: hidden;
  }
  td {
    text-align: center;
    padding: 0.12rem;
  }

  tbody tr:nth-child(odd) {
    background: ${props => props.theme.palette.background};
    border-color: ${props => props.theme.palette.background};
  }
`;
export default StyledTable;

export const Thead = styled.thead`
  color: ${props => props.theme.palette.lightGray};
  font-weight: bold;
  /* padding-bottom: 5rem; */
  height: 5rem;
`;
