import styled from 'styled-components/macro';

import Box from '../../common/box';

export const StyledWrapper = styled(Box)`
  text-align: justify;
  user-select: none;
`;

export const Completed = styled.span`
  color: ${props => props.theme.palette.green};
`;

export const Uncompleted = styled.span`
  color: ${props => props.theme.palette.lightGray};
`;

export const Wrong = styled.span`
  color: ${props => props.theme.palette.red};
`;

type WordWrapperProps = {
  isOkay: boolean;
};

export const WordWrapper = styled.span<WordWrapperProps>`
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
    background-color: ${props =>
      props.isOkay ? props.theme.palette.green : props.theme.palette.red};
  }
`;
