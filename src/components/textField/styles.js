import styled from 'styled-components/macro';

export const Completed = styled.span`
  color: ${props => props.theme.palette.green};
`;

export const Uncompleted = styled.span`
  color: ${props => props.theme.palette.lightGray};
`;

export const Good = styled.span`
  color: ${props => props.theme.palette.white};
`;

export const Wrong = styled.span`
  color: ${props => props.theme.palette.red};
`;
