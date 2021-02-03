import styled from 'styled-components/macro';
import Toast from '../toast/styles';

export default styled.section`
  width: 450px;
  position: absolute;
  right: 1rem;
  bottom: 5rem;

  ${Toast}:not(:last-child) {
    margin-bottom: 0.4rem;
  }
`;
