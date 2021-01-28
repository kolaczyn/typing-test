import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const transitionDuration = '115ms';

const StylesWrapper = styled(Link)`
position: relative;
&::after {
  bottom: -2px;
  content: '';
  position: absolute;
  display: block;
  background: ${props => props.theme.palette.text};
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  border-radius: 1px;
  transition: all ${transitionDuration} ease-out;
  transform-origin: left; 
}

&:hover::after {
  transition: all ${transitionDuration} ease-out;
  transform: scaleX(1);
  transform-origin: right; 
}
`;
 const StyledLink = (props) => <StylesWrapper {...props} />

export default StyledLink;
