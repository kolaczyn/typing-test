import styled from 'styled-components/macro';

import Box from '../../common/box';
import CloseButton from '../../common/close-button/styles';

export default styled(Box)`
  position: relative;

  ${CloseButton} {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(45%, -45%);
  }
`;
