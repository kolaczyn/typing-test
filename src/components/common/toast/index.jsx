import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Wrapper, { LeftSection, RightSection } from './styles';

export default function Toast({
  children, id, deleteToast, type, ...rest
}) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      deleteToast(id);
    }, 3500);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <Wrapper {...rest}>
      <LeftSection onClick={() => deleteToast(id)} type={type}>
        ✕
      </LeftSection>
      <RightSection>{children}</RightSection>
    </Wrapper>
  );
}

Toast.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
  deleteToast: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Toast.defaultProps = {
  type: 'info',
};
