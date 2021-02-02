import styled from 'styled-components/macro';

export default styled.input`
  font-family: inherit;
  border: none;
  text-align: center;
  padding: 0.6rem 0.8rem;
  flex-grow: 1;
  border: transparent solid 1px;
  color: ${(props) => (props.active ? 'inherit' : props.theme.palette.lightGray)};
  background-color: ${(props) => props.theme.palette.box};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: rgba(10, 10, 10, 0.12) 0px 8px 24px;
  

  &:focus {
    outline: none;
    border: ${(props) => props.theme.palette.box} solid 1px;
  }
`;
