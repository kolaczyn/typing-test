import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Input from './styles';

const InputField = forwardRef((props, ref) => {
  const {
    value, active, autoFocus, onChange, noCorrection, inactiveMessage, type, ...rest
  } = props;

  const correctionSettings = noCorrection && {
    autoComplete: 'off',
    spellCheck: 'false',
    autoCorrect: 'off',
    autoCapitalize: 'off',
  };

  return (
    <Input
      {...correctionSettings}
      ref={ref}
      type={type}
      autoFocus={autoFocus}
      value={active ? value : inactiveMessage}
      onChange={active ? onChange : () => null}
      {...rest}
    />
  );
});

export default InputField;

InputField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  active: PropTypes.bool,
  autoFocus: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  noCorrection: PropTypes.bool,
  inactiveMessage: PropTypes.string,
  type: PropTypes.string,
};

InputField.defaultProps = {
  active: true,
  autoFocus: false,
  noCorrection: false,
  inactiveMessage: '',
  type: 'text',
};
