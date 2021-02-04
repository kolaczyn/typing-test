import styled from 'styled-components/macro';

import Box from '../../common/box';

import CloseButton from '../../common/close-button/styles';
import ExpandButton from '../../common/expand-button/styles';

export const Section = styled.section`
  // add spacing between paragraphs
  p:not(:last-child) {
    margin-bottom: 0.3rem;
  }
`;

export default styled(Box)`
  font-size: 1.15rem;
  line-height: 1.22;
  position: relative;

  ${CloseButton} {
    position: absolute;
    right: 0;
    border: ${(props) => props.theme.palette.background} solid 0.4rem;
    top: 0;
    transform: translate(45%, -45%);
  }

  // the collapse button
  ${ExpandButton} {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }

  // I'm using classNames to get the effect of collapsing etc,
  // maybe there is a better, less hacky way of doing this
  &.is-collapsed {
    ${Section} {
      max-height: 6rem;
      overflow: hidden;
    }
    ::after {
      content: '';
      position: absolute;
      right: 0;
      left: 0;
      bottom: 1rem;

      display: block;
      height: 3.5rem;
      background-image: ${(props) => `linear-gradient(rgba(0, 0, 0, 0), ${props.theme.palette.box})`};
    }
  }
`;
