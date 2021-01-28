import styled from 'styled-components/macro'

export default styled.section`
  font-size: 1.75rem;
  background-color: ${props => props.theme.palette.box};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: rgba(10, 10, 10, 0.12) 0px 8px 24px;
  padding: .8rem;
  // TODO: add drop shadow
`;