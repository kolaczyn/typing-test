import styled from 'styled-components/macro';

export default styled.table`
  width: 100%;
  text-align: center;
`;

export const Thead = styled.thead`
  color: ${props => props.theme.palette.lightGray};
`;

export const Place = styled.td`
  width: 10%;
  text-align: left;
`;

export const Wpm = styled.td`
  width: 35%;
`;

export const Accuracy = styled.td`
  width: 40%;
`;

export const Time = styled.td`
  width: 15%;
`;
