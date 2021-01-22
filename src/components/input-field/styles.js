import styled from 'styled-components/macro';

export default styled.input`
  font-family: inherit;
  border: none;
  text-align: center;
  padding: 0.6rem 0.8rem;
  flex-grow: 1;
  border: transparent solid 1px;
  color: inherit;
  background-color: ${props => props.theme.palette.box};

  &:focus {
    outline: none;
    border: ${props => props.theme.palette.box} solid 1px;
  }
`;