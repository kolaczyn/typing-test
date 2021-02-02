import styled from 'styled-components/macro';

export const Container = styled.section`
  line-height: 1.35;
  font-size: 1.35rem;
  background-color: ${(props) => props.theme.palette.box};
  border: ${(props) => props.theme.palette.border} solid 1px;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: rgba(10, 10, 10, 0.12) 0px 8px 24px;
  padding: .8rem;
`;

export const Header = styled.header`
  font-size: 1.8rem;
  font-weight: bold;
  padding-bottom: .4rem;
  margin-bottom: .4rem;
  border-bottom: 1px solid ${(props) => props.theme.palette.background};
`;
