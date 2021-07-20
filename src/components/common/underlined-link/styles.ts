import styled from 'styled-components/macro';

const transitionDuration = '115ms';

export const Label = styled.span`
  position: relative;
`;

type AnchorProps = {
  isalwaysunderlined: boolean;
};

// TODO I use these styles also in StyledLink
// I should figure out a way to use the same code in those two places
export default styled.a<AnchorProps>`
  display: inline-flex;
  align-items: center;

  &:focus {
    outline: none;
  }

  // select the icon
  i {
    margin-right: 0.5rem;
  }

  // underline on hover
  ${Label}::after {
    display: inline-block;
    content: '';
    height: 1px;
    width: 100%;
    background: ${props => props.theme.palette.text};

    position: absolute;
    bottom: 0;
    left: 0;
    // if it is always underlined, there is no animation, so the scale is 1; there's a normal underline
    transform: scaleX(${props => (props.isalwaysunderlined ? 1 : 0)});
    transition: all ${transitionDuration} ease-in-out;
    transform-origin: left;
  }

  &:hover > ${Label}::after, &:focus > ${Label}::after {
    transform: scaleX(1);
    transform-origin: right;
  }
`;
