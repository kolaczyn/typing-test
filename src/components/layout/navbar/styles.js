import styled from 'styled-components/macro';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const Ul = styled.nav`
  display: flex;
  gap: 1.25rem;
`;

export const Nav = ({ children, ...restProps }) => <nav {...restProps}>
  <Ul>
    {children}
  </Ul>
</nav>
