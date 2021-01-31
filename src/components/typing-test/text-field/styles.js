import styled from 'styled-components/macro';

import Box from '../../../components/common/box';

const StyledWrapper = styled(Box)`
  text-align: justify;
  user-select: none;
  line-height: 1.3;
`;

export const Wrapper = ({ children, ...props }) => (
  <StyledWrapper unselectable='on' {...props}>
    {children}
  </StyledWrapper>
);

export const Completed = styled.span`
  color: ${(props) => props.theme.palette.green};
`;

export const Uncompleted = styled.span`
  color: ${(props) => props.theme.palette.lightGray};
`;

export const Wrong = styled.span`
  color: ${(props) => props.theme.palette.red};
`;

export const WordWrapper = styled.span`
  position: relative;
  &::before {
    position: absolute;
    bottom: -1px;
    border-radius: 1px;
    right: 0;
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    transition: background-color 0ms ease-in;
    background-color: ${(props) =>
      props.isOkay ? props.theme.palette.green : props.theme.palette.red};
  }
`;
