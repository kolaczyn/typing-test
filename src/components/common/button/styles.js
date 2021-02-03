import styled from 'styled-components/macro';

export default styled.button`
  font-size: 1.25rem;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: rgba(10, 10, 10, 0.12) 0px 8px 24px;
  border: ${(props) => props.theme.palette.border} solid 1px;

  outline: none;
  cursor: pointer;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .5rem 1rem;

  background-color: ${(props) => (props.secondary ? props.theme.palette.background : props.theme.palette.box)};
  background-color: ${(props) => (props.primary && props.theme.palette.blue)};
  color: ${(props) => props.theme.palette.text};

  &:focus {
    outline: none;
  }

  &:hover {
    transform: translateY(-1px);
    /* background-color: ${(props) => props.theme.palette.border}; */
  background-color: ${(props) => (props.secondary ? props.theme.palette.background : props.theme.palette.border)};
  }

  &:active {
    transform: translateY(1px);
  }
`;
