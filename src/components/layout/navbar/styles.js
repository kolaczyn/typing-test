import styled from 'styled-components/macro';
import Logo from '../../common/logo/styles';

export const Ul = styled.nav`
  display: flex;
  gap: 1.25rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  @media only screen and (max-width: 570px) {
    flex-direction: column;
    ${Logo} {
      margin-bottom: .75rem;
    }
  }
  @media only screen and (max-width: 400px) {
    ${Ul} {
      font-size: .85rem;
    }
  }
`;
