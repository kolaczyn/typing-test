import styled from 'styled-components/macro';

export default styled.button`
  font-size: 1.75rem;
  border-radius: 0.75rem;

  border: none;
  outline: none;
  cursor: pointer;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.palette.box};
  color: ${props => props.theme.palette.text};

  &:focus {
    outline: none;
    /* border: ${props => props.theme.palette.lightGray} solid 2px; */
  }

`;
