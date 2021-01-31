import styled from 'styled-components/macro';
import Container from '../common/Container';

// TODO figure out a better names for these components
export const Body = styled.div`
  background-color: ${props => props.theme.palette.background};
  color: ${props => props.theme.palette.text};
  font-family: "Montserrat", sans-serif;
`;

export const OuterBody = styled.div`
  align-items: stretch;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const UpperBody = styled(Container)`
width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: stretch; */
`;