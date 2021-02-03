import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styles';
import CloseButton from '../close-button';

export default function Toast({
  children, id, deleteToast, ...rest
}) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      deleteToast(id);
    }, 3500);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <Wrapper {...rest}>
      <CloseButton onClick={() => deleteToast(id)} />
      {children}
    </Wrapper>
  );
}

Toast.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
  deleteToast: PropTypes.func.isRequired,
};
