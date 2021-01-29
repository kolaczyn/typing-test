import styled from 'styled-components/macro';

export const Wrapper = styled.footer`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: ${props => props.theme.palette.box};
  text-align: center;
  width: 100%;
  box-shadow: rgba(10, 10, 10, 0.52) 0px 8px 24px;
`;

export const LinksWrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin-top: .85rem;
`;
