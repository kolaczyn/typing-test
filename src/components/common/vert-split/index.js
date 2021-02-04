import styled from 'styled-components/macro';

export default styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const LeftSection = styled.section`
  border-right: ${(props) => props.theme.palette.background} solid 2px;
  margin-right: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
`;
