import styled from 'styled-components/macro';
import Logo from '../../common/logo/styles';

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 1.25rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  @media only screen and (max-width: 660px) {
    flex-direction: column;
    ${Logo} {
      margin-bottom: 0.75rem;
    }
  }
  @media only screen and (max-width: 435px) {
    ${Ul} {
      font-size: 0.85rem;
    }
  }
`;
