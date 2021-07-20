import styled from 'styled-components/macro';
import Box from '../box';
import Button from '../button';

export default styled(Box)`
  border: ${props => props.theme.palette.background} solid 2px;
  display: flex;
  align-items: stretch;
  padding: 0;
  gap: 0.5rem;
  /* bottom: 0;
  right: 0; */
`;

type LeftSectionProps = {
  type: string;
};

export const LeftSection = styled(Button)<LeftSectionProps>`
  border-radius: 0;
  flex-grow: 1;
  width: 5rem;
  font-size: 2rem;
  font-weight: normal;
  &,
  &:hover {
    background-color: ${props =>
      props.type === 'info' && props.theme.palette.blue};
    background-color: ${props =>
      props.type === 'warning' && props.theme.palette.yellow};
    background-color: ${props =>
      props.type === 'danger' && props.theme.palette.red};
  }
`;

export const RightSection = styled.div`
  padding: 0.4rem;
`;
