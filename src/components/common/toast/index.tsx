import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Wrapper, { LeftSection, RightSection } from './styles';

type Props = {
  id: number;
  type?: string;
  children: React.ReactNode;
  deleteToast: (id: number) => void;
};

const Toast: React.FC<Props> = ({
  children,
  id,
  deleteToast,
  type,
  ...rest
}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      deleteToast(id);
    }, 3500);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <Wrapper {...rest}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <LeftSection onClick={() => deleteToast(id)} submitType={type}>
        ✕
      </LeftSection>
      <RightSection>{children}</RightSection>
    </Wrapper>
  );
};
export default Toast;

Toast.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
  deleteToast: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Toast.defaultProps = {
  type: 'info',
};
