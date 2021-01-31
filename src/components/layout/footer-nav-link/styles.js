import styled from 'styled-components/macro';

const transitionDuration = '115ms';

// TODO I use these styles also in StyledLink
// I should figure out a way to use the same code in those two places
export const NavLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;

  & > i {
    margin-right: .5rem;
  }

  & > p::after {
    bottom: -2px;
    content: '';
    position: absolute;
    display: block;
    background: ${props => props.theme.palette.text};
    /* TODO figure out something better than this 70% */
    /* because it look only good because all the labels of the links have similar width */
    /* maybe i should use sibiling selector on the icon? */
    width: 69%;
    transform: scaleX(0);
    height: 1px;
    border-radius: 1px;
    transition: all ${transitionDuration} ease-out;
    transform-origin: left; 
  }

  &:hover > p::after {
    transition: all ${transitionDuration} ease-out;
    transform: scaleX(1);
    transform-origin: right; 
}

`;