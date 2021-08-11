import styled from 'styled-components/macro';

const VertSplit = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;
export default VertSplit;

export const LeftSection = styled.section`
  border-right: ${props => props.theme.palette.background} solid 2px;
  margin-right: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
`;
