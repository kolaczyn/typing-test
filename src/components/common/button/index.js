import styled from 'styled-components/macro';

export default styled.button`
  font-size: 1.75rem;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: rgba(10, 10, 10, 0.12) 0px 8px 24px;

  border: none;
  outline: none;
  cursor: pointer;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.palette.box};
  color: ${(props) => props.theme.palette.text};

  &:focus {
    outline: none;
  }

  &:focus,
  &:hover {
    transform: translateY(-1px);
    background-color: ${(props) => props.theme.palette.border};
  }

  &:active {
    transform: translateY(1px);
  }
`;
