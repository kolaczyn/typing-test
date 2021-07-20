import styled from 'styled-components/macro';

type Props = {
  active: boolean;
  secondary: boolean;
};

export default styled.input<Props>`
  font-family: inherit;
  border: ${props => props.theme.palette.border} solid 1px;
  text-align: center;
  padding: 0.6rem 0.8rem;
  flex-grow: 1;
  color: ${props => (props.active ? 'inherit' : props.theme.palette.lightGray)};
  background-color: ${props => props.theme.palette.box};
  background-color: ${props =>
    props.secondary && props.theme.palette.background};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: rgba(10, 10, 10, 0.12) 0px 8px 24px;

  &:focus {
    outline: none;
    border: ${props => props.theme.palette.box} solid 1px;
  }
`;
