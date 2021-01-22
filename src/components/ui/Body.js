import styled from 'styled-components/macro';

export default styled.body`
  background-color: ${props => props.theme.palette.background};
  color: ${props => props.theme.palette.text};
  min-height: 100vh;

  font-family: "Montserrat", sans-serif;
`