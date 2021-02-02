import styled from 'styled-components/macro';

export const Wrapper = styled.footer`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: ${(props) => props.theme.palette.border} solid 1px;
  background-color: ${(props) => props.theme.palette.box};
  text-align: center;
  width: 100%;
  box-shadow: rgba(10, 10, 10, 0.52) 0px 8px 24px;
`;

export const LinksWrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin-top: 0.85rem;
  @media only screen and (max-width: 425px) {
    // hide the icons
    justify-content: space-between;
    i {
      display: none;
    }
  }
`;

export const Copyright = styled.section`
  @media only screen and (max-width: 345px) {
    display: flex;
    flex-direction: column;
    > *:first-child {
      margin-bottom: .25rem;
    }
  }
`;
